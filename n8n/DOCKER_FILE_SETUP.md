# 🐳 Docker Setup: Create Tracking File

**For n8n running in Docker**

---

## STEP 1: Find Your n8n Container

**Run this command:**
```bash
docker ps
```

**Look for:** Container with "n8n" in the name or image. Common names:
- `n8n`
- `n8n-n8n`
- `n8n_1`
- Or check your docker-compose.yml

**Note the container name** (first column)

---

## STEP 2: Create the File

**Replace `<container-name>` with your actual container name:**

```bash
docker exec -it <container-name> sh -c "mkdir -p /home/node/.n8n-files && echo '[]' > /home/node/.n8n-files/posted-content.json"
```

**Example (if container is named "n8n"):**
```bash
docker exec -it n8n sh -c "mkdir -p /home/node/.n8n-files && echo '[]' > /home/node/.n8n-files/posted-content.json"
```

---

## STEP 3: Verify File Was Created

**Check if file exists:**
```bash
docker exec -it <container-name> cat /home/node/.n8n-files/posted-content.json
```

**Should output:** `[]`

---

## STEP 4: Update n8n Nodes

**In "Read Tracking JSON" node:**
- File Path: `/home/node/.n8n-files/posted-content.json`
- Property Name: `data`

**In "Write Tracking JSON" node:**
- File Path: `/home/node/.n8n-files/posted-content.json`
- Property Name: `data`

---

## 🔄 If Container Restarts

**The file will persist if:**
- You have a volume mounted to `/home/node/.n8n-files`
- Or the container has persistent storage

**To make it persistent, add to docker-compose.yml:**
```yaml
volumes:
  - ./n8n-files:/home/node/.n8n-files
```

**Or if using docker run:**
```bash
-v ./n8n-files:/home/node/.n8n-files
```

---

## 🆘 Troubleshooting

**"No such container":**
- Check container name: `docker ps`
- Use exact name from the list

**"Permission denied":**
- Try without `-it` flag: `docker exec <container-name> sh -c "..."`
- Or check container user permissions

**File disappears after restart:**
- Add volume mount (see above)
- Or recreate file after each restart

---

**Once file is created, test the "Read Tracking JSON" node - it should work!**

