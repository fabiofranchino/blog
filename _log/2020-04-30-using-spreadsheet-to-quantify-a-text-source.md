---
title: Using Spreadsheet to quantify a text source
date: 2020-04-30 14:33:00 +0100
subtitle: 30th April, 2020
categories: Logs
tags: [log]
---

Here a getting started with Google Spreadsheet and its functions to collect some quantitative information from a given text.

To measure the length of a text, where `A1` is the cell that contains the actual text:

```spreadsheet
=LEN(A1)
```

To count the characters:

```spreadsheet
=COUNT(A1)
```

To count words:

```spreadsheet
=COUNT(SPLIT(A1, " "))
```

To count occourrence of a specific word:

```spreadsheet
=COUNT(SPLIT(A1, "Rome"))
```

To count accourrence with edge cases, such as words with puctuation:

```spreadsheet
=COUNT(SPLIT(A1, "Rome*"))
```

