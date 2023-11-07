const { MongoClient } = require('mongodb');

// Connection URI for your MongoDB server
const MONGO_URL="mongodb://127.0.0.1:27017/Ecommerece_TS"

// Sample data to insert
const productData = [
    {
        "product_name": "Widget 15",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 15",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 15",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 15",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 15",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 16",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 1",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 1",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 1",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 1",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 1",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 1",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 1",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 1",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 1",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 1",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 1",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 1",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
    {
        "product_name": "Widget 1",
        "price": 19.99,
        "description": "A high-quality widget for various purposes.",
        "category": "Widgets",
        "stock_quantity": 100,
        "reviews": [
            {
                "user": "User1",
                "rating": 4,
                "comment": "Great product!"
            },
            {
                "user": "User2",
                "rating": 5,
                "comment": "Excellent widget."
            }
        ],
        "features": [
            "Durable construction",
            "Easy to assemble",
            "Multiple color options"
        ]
    },
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 51",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 81",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 1",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
},
{
    "product_name": "Widget 19",
    "price": 19.99,
    "description": "A high-quality widget for various purposes.",
    "category": "Widgets",
    "stock_quantity": 100,
    "reviews": [
        {
            "user": "User1",
            "rating": 4,
            "comment": "Great product!"
        },
        {
            "user": "User2",
            "rating": 5,
            "comment": "Excellent widget."
        }
    ],
    "features": [
        "Durable construction",
        "Easy to assemble",
        "Multiple color options"
    ]
}
                                                                    
    ];

async function insertData() {
    const client = new MongoClient(MONGO_URL) ;

    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const collection = client.db().collection('products');
        const result = await collection.insertMany(productData);

        console.log(`Inserted ${result.insertedCount} documents into the collection`);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        await client.close();
    }
}

insertData();
