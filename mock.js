// Mock api data will be housed here

const BODYRESPONSE = {
    instance_url: "www.test.com",
    access_token: "123abc",
};

KNOWLEDGEIDS_BODY = {
    totalSize: 3,
    records: [
        { Id: 1 }, { Id: 2 }, { Id: 3 }
    ]
};

ARTICLE_RESPONSE = { "Title": "Sample Article Title | Mock URL"};

module.exports = {
    MOCKS: {
        BODYRESPONSE,
        KNOWLEDGEIDS_BODY,
        ARTICLE_RESPONSE,
    },
};