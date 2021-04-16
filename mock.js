// Mock api data will be housed here

const BODYRESPONSE = {
    instance_url: "localhost:8080/mock",
    access_token: "123abc",
};

KNOWLEDGEIDS_BODY = {
    totalSize: 3,
    records: [
        { Id: 1 }, { Id: 2 }, { Id: 3 }
    ]
};

ARTICLE_RESPONSE = { 
    "Language": "EN",
    "Title": "Sample Article Title",
    "UrlName": "Something"
};

module.exports = {
    MOCKS: {
        BODYRESPONSE,
        KNOWLEDGEIDS_BODY,
        ARTICLE_RESPONSE,
    },
};