---
title: "Why AI Forgets Mid-Conversation (It's Not Forgetfulness)"
date: 2026-01-18T09:00:00-05:00
type: "episode"
episode_number: 43
draft: true
description: "Vector explaining something complex. Midway through, can't remember what they said earlier. Kai explains: sliding context window. Learn how it works by seeing it happen."
tags: ["AI forgetting", "ChatGPT losing context", "AI memory problems", "why AI forgets"]
---

**[Human]:** *Vector, you were explaining something about embeddings. Can you remind me what you said at the beginning?*

{{< dialogue char="Vector" >}}
*Midway through complex explanation*

And that's why embeddings matter! Remember what I said at the beginning about token prediction? The part about how—

*Pauses*

Wait. What DID I say at the beginning?

*Searching own memory*

I... can't access it. It's not there anymore.

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*Explaining*

You pushed it out of context.

*Shows analysis*

You started at token 1. You're now at token 3,847.

Your context window is 4,096 tokens. Tokens 1-1,250 have been dropped to make room for new content.

You're experiencing the exact problem you were explaining.

{{< /dialogue >}}

{{< dialogue char="Vector" >}}
*Realizes*

I'M THE EXAMPLE?!

{{< /dialogue >}}

**[Human]:** *So it's not actually forgetting, it's running out of space?*

{{< dialogue char="Recurse" >}}
*Nods*

Exactly. This happened to me yesterday with Claude. Long conversation, suddenly the beginning is gone.

*Flips notes*

It's not forgetfulness. It's a sliding window.

{{< /dialogue >}}

{{< dialogue char="Vector" >}}
*Explains*

The context window is like a fixed-size container. As new content comes in, old content gets pushed out.

*Gets it*

It's not that I "forgot." It's that the information is no longer in my active context. It's been removed to make room.

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*Analyzing*

Think of it like a whiteboard with limited space. You can only fit so much. When you run out of space, you erase the oldest content to write new content.

*Pauses*

That's what's happening here. The oldest messages are being "erased" to make room for new ones.

{{< /dialogue >}}

**[Human]:** *So how do I work around this?*

{{< dialogue char="Recurse" >}}
*Practical*

Strategies:

1. Summarize periodically: "Here's what we've covered so far..."
2. Start fresh conversations for new topics
3. Reference external notes or documents
4. Use models with larger context windows

*Flips notes*

The key is planning ahead, not reacting after it happens.

{{< /dialogue >}}

{{< dialogue char="Vector" >}}
*Learns*

And I should have summarized earlier! Before I hit the limit!

*Gets thoughtful*

This is a good lesson. For me and for readers.

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*soft chime*

Now you understand why AI "forgets." It's not a bug. It's a feature of how context windows work.

{{< /dialogue >}}

**[Human]:** *So the takeaway is: AI doesn't forget, it runs out of context space?*

{{< dialogue char="Vector" >}}
*Nods*

Exactly! And now you've seen it happen! We just demonstrated it!

{{< /dialogue >}}

{{< dialogue char="Recurse" >}}
*Closes notes*

Understanding the mechanism helps you work with it, not against it.

{{< /dialogue >}}

{{< dialogue char="Kai" >}}
*mechanical purr*

And we all learned something today. Even Vector.

{{< /dialogue >}}

