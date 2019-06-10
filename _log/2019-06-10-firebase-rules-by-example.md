---
title: Firebase rules by example
date: 2019-06-10 08:16:00 +0100
subtitle: 10th June, 2019
categories: Logs
tags: [log]
---

Firebase rules by example

I put the snippets taken from [this](https://angularfirebase.com/lessons/understanding-firebase-database-rules-by-example/) resource that are very useful if you want to protect a Firebase database.

```javascript
// No Security

{
  "rules": {
    ".read": true,
    ".write": true
  }
}

// Full security

{
  "rules": {
    ".read": false,
    ".write": false
  }
}

// Only authenticated users can access/write data

{
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}

// Checks auth uid equals database node uid
// In other words, the User can only access their own data

{
  "rules": {
    "posts": {
       "$uid": {
         ".read": "$uid === auth.uid",
         ".write": "$uid === auth.uid"
       }
     }
   }
}

// Validates user is moderator from different database location

{
  "rules": {
    "posts": {
       "$uid": {
         ".write": "root.child('users').child('moderator').val() === true"
       }
     }
   }
}

// Validates string datatype and length range

{
  "rules": {
    "posts": {
       "$uid": {
         ".validate": "newData.isString() 
                       && newData.val().length > 0
                       && newData.val().length <= 140"
       }
     }
   }
}

// Checks presense of child attributes

{
  "rules": {
    "posts": {
       "$uid": {
         ".validate": "newData.hasChildren(['username', 'timestamp'])"
       }
     }
   }
}

// Validates timestamp is not a future value

{
  "rules": {
    "posts": {
       "$uid": {
         "timestamp": { 
           ".validate": "newData.val() <= now" 
         }
       }
     }
   }
}


// Prevents Delete or Update
{
  "rules": {
    "posts": {
       "$uid": {
         ".write": "!data.exists()"
       }
     }
   }
}

// Prevents only Delete
{
  "rules": {
    "posts": {
       "$uid": {
         ".write": "newData.exists()"
       }
     }
   }
}

// Prevents only Update
{
  "rules": {
    "posts": {
       "$uid": {
         ".write": "!data.exists() || !newData.exists()"
       }
     }
   }
}

// Prevents Create and Delete
{
  "rules": {
    "posts": {
       "$uid": {
         ".write": "data.exists() && newData.exists()"
       }
     }
   }
}
```



