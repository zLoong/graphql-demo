// mock data(实际场景是来源API或数据库等)
const mock = {
  article: {
    "docId": "2228112625978831170",
    "from": "盖饭娱乐",
    "fusionId": "qeh_5508885",
    "title": "10岁王诗龄曝近照，拍杂志封面表现力十足",
    "time": "2020-05-20 18:30:26",
    "contentFields": [
      { type: "text", value: "王诗龄自从参加综艺《爸爸去哪儿》后，一直颇有话题度..." },
      { type: "image", value: "http://res.imtt.qq.com/tagapp/img/loong/content/1.jpg" },
    ]
  },
  author: {
    "puin": "3340113942",
    "avatar": "http://res.imtt.qq.com/tagapp/img/loong/avater/1.jpg",
    "isDv": true,
    "dvIcon": "https://res.imtt.qq.com/tagapp/news/dv.png",
    "ident": "美食博主"
  },
  postInfo: {
    postId: "4_2228112625978831170",
    commentNum: 38,
    praiseNum: 66,
    praised: true,
  }
}

const fetchData = async (param) => {
  return mock[param];
};

const Query = {
  getArticle: async () => {
    const article = await fetchData('article');
    const author = await fetchData('author');
    const postInfo = await fetchData('postInfo');
    return {
      ...article,
      author,
      postInfo
    }
  }
};
module.exports = {
  Query,
};
