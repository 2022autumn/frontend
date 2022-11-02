# 学术数据JSON字段介绍

## Generally Speaking

### Data

OpenAlex使用了五种实体及其关系来描述学术数据，下面是五种数据的概述：

- 📄 [Works]() are papers, books, datasets, etc; they *cite* other works
- 👩 [Authors]() are people who *create* works
- 📚 [Venues]() are journals and repositories that *host* works
- 🏫 [Institutions]() are universities and other orgs that are *affiliated with* works (via authors)
- 💡 [Concepts]() *tag* Works with a topic

OplenAlex数据集使用了冗余存储的方案，例如：works中authorship字段存储了author的简化版信息。在大部分常见的场景下，这样的设计有利于加快数据的查询，因为我们可以直接从一个实体读取而不必再通过实体之间的联系去查另一个表。下面这张图呈现了OpenAlen的冗余方案，works中冗余存储了venues、concepts、authorships的一个简化版本。（authorships是authors、institutions的pair）。因此，在大部分情况下，我们获取到works实体的信息就足以呈现大部分网页所需的信息了。在学者门户、机构门户等页面，可以通过work中提供的相应entity ID再到后端进行查询。

![](https://i.imgur.com/FXTji65.png)

关于前端网页呈现的内容，可以参考openAlex的官方实现：https://explore.openalex.org/

鉴于五个实体的返回给前端的JSON对象比较复杂，接下来我们把五个实体的字段做一个简单的介绍，方便前端同学使用，由于这一部分官方文档已经很完备了，因此这里只作为一个QuickStart，对较为重要的字段附上一些注释，更多的信息可以到官方文档查询（**Entity objects**官方文档：https://docs.openalex.org/about-the-data）。

### ID

在OpenAlex数据集中，引入了OpenAlex ID作为所有实体的唯一标识符。这种ID是一个URL，分为两部分，第一部分是`https://openalex.org/`，第二部分是ID，ID是标识我们数据库中给定资源的唯一主键。总体的形式是：`https://openalex.org/<OpenAlex_key>`. 例如：[`https://openalex.org/W2741809807`](https://openalex.org/W2741809807)

key以字母开头，标明它是什么样的实体：W(ork)、A(uthor)、V(enue)、I(nstitution) 或 C(oncept)

每个实体都有一个 OpenAlex ID。但这五个实体在其他的资源系统中也有 ID，例如论文常常使用doi作为ID。我们也支持其他外部 ID，但不一定每一条数据都有外部ID。

These are the Canonical External IDs:

- Works: [DOI]()
- Authors: [ORCID]()
- Venues: [ISSN-L]()
- Institutions: [ROR ID]()
- Concepts: [Wikidata ID]()

---

## Work

Works are scholarly documents like journal articles, books, datasets, and theses.

The canonical PID for works is DOI; about half of works have one.

Works are linked to other works via the [`referenced_works`]() (outgoing citations), [`cited_by_api_url`]() (incoming citations), and [`related_works`]() properties.

There are three component objects that are only used as part of a `Work`: 

```json
{
	id: "https://openalex.org/W2741809807",
	doi: "https://doi.org/10.7717/peerj.4375",
    title: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
    display_name: "The state of OA: a large-scale analysis of the prevalence and impact of Open Access articles",
    publication_year: 2018,
    publication_date: "2018-02-13",
    // ids 是这个work所有存在的规范性ID，包括外部的+open Alex规定的
    ids: {
    	openalex: "https://openalex.org/W2741809807",
    	doi: "https://doi.org/10.7717/peerj.4375",
    	mag: 2741809807,
    	pmid: "https://pubmed.ncbi.nlm.nih.gov/29456894"
	},
    // host_venue 指出了一个网络的托管地址，在这里你可以找到这篇文章的最好相关资源
    host_venue: {
    	// this top stuff is the same as a dehydrated Venue object（一个简化版的Vuene）
        id: "https://openalex.org/V1983995261",
        issn_l: "2167-8359",
        issn: [
            "2167-8359"
        ],
        display_name: "PeerJ",
        publisher: "PeerJ",
        type: "journal",

        // this stuff is extra, and relates to this work at this venue
        //  The URL where you can access this work.
        url: "https://doi.org/10.7717/peerj.4375",
        //  Set to true if the work hosted here can be read for free, without registration.
        is_oa: null,	// 是否是open Acess的
        version: null,
        license: null
    },
    // work的种类
    type: "journal-article",
    // open Access的意思大概是这个文章的内容是不是开源的
    open_access: {
        // True if this work is Open Access (OA). 
    	is_oa: true,
        // 参考https://docs.openalex.org/about-the-data/work#oa_status
    	oa_status: "gold",
    	oa_url: "https://peerj.com/articles/4375.pdf"
	},
    // 作为数组，存储了author、institution的pairs
    authorships: [
        // first authorship object:
        {
            // author's position in the work's author list. 
            // Possible values are first, middle, and last. 
            author_position: "first",
            author: {
                id: "https://openalex.org/A1969205032",
                display_name: "Heather A. Piwowar",
                orcid: "https://orcid.org/0000-0003-1613-5981"	//另外一种author id
            },
            institutions: [
                {
                    id: "https://openalex.org/I4200000001",
                    display_name: "OurResearch",
                    ror: "https://ror.org/02nr0ka47", // 另外一种institution id
                    country_code: "US",
                    type: "nonprofit"
                }
            ]
        },

        // more authorship objects go here, omited for space.
    ],
    cited_by_count: 382,
    // biblio是一个没什么用的字段
    biblio: {
        volume: "495",
        issue: "7442",
        first_page: "437",
        last_page: "440"
    },
    // work是否被撤回了
    is_retracted: false,
    // 副文本，详细介绍参考 https://www.iiiff.com/article/410378
    is_paratext: false,
    // 类似关键词，但是是机器生成的不是文章给出的，有一个打分score，分数越高相关度越高
    concepts: [
        {
            id: "https://openalex.org/C2778793908",
            wikidata: "https://www.wikidata.org/wiki/Q5122404",
            display_name: "Citation impact",
            level: 3,
            score: 0.459309
        },
        {
            id: "https://openalex.org/C2778805511",
            wikidata: "https://www.wikidata.org/wiki/Q1713",
            display_name: "Citation",
            level: 2,
            score: 0.447306
        }
    ],
    // mesh医学领域的词条【感觉用不上，没具体去了解】http://tul.blog.ntu.edu.tw/archives/7180
    mesh: [
        {
            descriptor_ui: "D017712",
            descriptor_name: "Peer Review, Research",
            qualifier_ui: "Q000379",
            qualifier_name: "methods",
            is_major_topic: false
        },
        {
            descriptor_ui: "D017712",
            descriptor_name: "Peer Review, Research",
            qualifier_ui: "Q000592",
            qualifier_name: "standards",
            is_major_topic: true
        }
    ],
    // host_venues的替代品，缺少了canonical location
    alternate_host_venues: [
        {
            id: null,
            display_name: "Europe PMC",
            type: "repository",
            url: "http://europepmc.org/articles/pmc5815332?pdf=render",
            is_oa: true,
            version: "publishedVersion",
            license: "cc-by"
        },
        {
            id: null,
            display_name: "Simon Fraser University - Summit",
            type: "repository",
            url: "https://summit.sfu.ca/item/17691",
            is_oa: true,
            version: "submittedVersion",
            license: "cc-by"
        },
        // others omitted for brevity. 

    ],
    // 参考文献
    referenced_works: [
        "https://openalex.org/W2753353163",
        "https://openalex.org/W2785823074",
        "https://openalex.org/W2511661767",
        "https://openalex.org/W2115339903",
        "https://openalex.org/W2031754690"
    ],
    // Related works are computed algorithmically; 
    // the algorithm finds recent papers with the most concepts in common with the current paper.
	related_works: [
        "https://openalex.org/W2753353163",
        "https://openalex.org/W2785823074",
        "https://openalex.org/W2511661767",
        "https://openalex.org/W2115339903",
        "https://openalex.org/W2031754690",
    ],
    // 用于获取全文字段的一个索引集合，该集合用于全文搜索
    // 参考：https://docs.openalex.org/api/get-n-grams
    ngrams_url: "https://api.openalex.org/works/W2023271753/ngrams",
    // 摘要的索引，index-word 集合
	abstract_inverted_index: {
        Despite: [
            0
        ],
        growing: [
            1
        ],
        interest: [
            2
        ],
        in: [
            3,
            57,
            73,
            110,
            122
        ],
        Open: [
            4,
            201
        ],
        Access: [
            5
        ],
        ...
    },
    // 给出一个api 获得引用该文献的文献列表
    cited_by_api_url: https://api.openalex.org/works?filter=cited_by:W2766808518,
    counts_by_year: [
        {
            year: 2022,
            cited_by_count: 8
        },
        {
            year: 2021,
            cited_by_count: 252
        },
        ...
        {
            year: 2012,
            cited_by_count: 79
        }
    ],
	updated_date: "2022-01-02T00:22:35.180390",
	created_date: "2017-08-08",
        
}
```

## Author

updating

## Vuene

updating

## Institution

Institution是作者的所隶属的研究机构

OpenAlex indexes about 109,000 institutions. The [Canonical External ID]() for institutions is the ROR ID. About 94% of institutions in OpenAlex have ROR IDs.

Institutions are linked to works via the [`works.authorships`]() property.

```json
{
    id: "https://openalex.org/I114027177",
    ror: "https://ror.org/0130frc33",
    display_name: "University of North Carolina at Chapel Hill",
    country_code: "US",
    homepage_url: "http://www.unc.edu/",
    // URL where you can get an image representing this institution
    image_url: "https://upload.wikimedia.org/wikipedia/en/5/5c/University_of_North_Carolina_at_Chapel_Hill_seal.svg",
    // same as image_url but it's smaller
    image_thumbnail_url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/University_of_North_Carolina_at_Chapel_Hill_seal.svg/100px-University_of_North_Carolina_at_Chapel_Hill_seal.svg.png",
    // 机构缩写
    display_name_acronyms:["BUAA"],
    // 机构别名
    display_name_alternatives: [
        "Beihang university"
    ],
    works_count: 202704,
    cited_by_count: 21199844,
        ids: {
        openalex: "https://openalex.org/I114027177",
        ror: "https://ror.org/0130frc33",
        grid: "grid.10698.36",
        wikipedia: "https://en.wikipedia.org/wiki/University%20of%20North%20Carolina%20at%20Chapel%20Hill",
        wikidata: "https://www.wikidata.org/wiki/Q192334",
        mag: 114027177
    },
    // 机构的地理位置
    geo: {
        city: "Chapel Hill",
        geonames_city_id: "4460162",
        region: "North Carolina",
        country_code: "US",
        country: "United States",
        latitude: 35.9083,
        longitude: -79.0492
    },
    // display name in different languages
    international: {
        display_name: {
            "ar": "جامعة نورث كارولينا في تشابل هيل",
            "en": "University of North Carolina at Chapel Hill",
            "es": "Universidad de Carolina del Norte en Chapel Hill",
            "zh-cn": "北卡罗来纳大学教堂山分校",
            ...
        }
    },
    associated_institutions: [
        {
            id: "https://openalex.org/I2802101240",
            ror: "https://ror.org/0483mr804",
            display_name: "Carolinas Medical Center",
            country_code: "US",
            type: "healthcare",
            relationship: "related"
        },
        {
            id: "https://openalex.org/I69048370",
            ror: "https://ror.org/01s91ey96",
            display_name: "Renaissance Computing Institute",
            country_code: "US",
            type: "education",
            relationship: "related"
        },

        // and so forth
    ],
    counts_by_year: [
        {
            year: 2022,
            works_count: 133,
            cited_by_count: 32731
        },
        {
            year: 2021,
            works_count: 12565,
            cited_by_count: 2180827
        },

        // and so forth
    ],
    // 机构的研究方向
    x_concepts: [
        {
            id: "https://openalex.org/C86803240",
            wikidata: null,
            display_name: "Biology",
            level: 0,
            score: 86.7
        },
        {
            id: "https://openalex.org/C185592680",
            wikidata: null,
            display_name: "Chemistry",
            level: 0,
            score: 51.4
        },

        // and so forth
    ],
    // 获取机构的works的api
    works_api_url: "https://api.openalex.org/works?filter=institutions.id:I114027177",
    // 上次更新论文的时间
    updated_date: "2022-01-02T00:27:23.088909",
    created_date: "2017-08-08",
    
}
```

## Concept

updating

