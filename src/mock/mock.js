import Mock from "mockjs"
Mock.mock("/api","get",{
    "list|3":[
        {
            "content|+1":1,
            "contents|+1":1,
        }
    ]
})