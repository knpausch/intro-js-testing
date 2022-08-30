class Tweet {
  constructor (senderName, content, link) {
    this.sender = senderName;
    this.content = content;
    if (link != undefined)
    {
      this.link = link;
    }
    else
    {
      this.link = "no link provided";
    }
    this.likes = 0;
    this.retweets = 0;
    this.replies = [];
    this.replyCount = 0;
  }

  like() {
    this.likes++;
  }

  retweet() {
    this.retweets++;
  }

  reply(reply) {
    this.replies.push(reply);
    this.replyCount++;
  }

}

module.exports = Tweet;
