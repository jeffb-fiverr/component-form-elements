module.exports = {
    "starSize" : 20,
    "numberOfStars" : 5,
    "hiddenFieldName" : "someNameThatIsToBeChangedLater",
    "userSubmittedRating" : 4,
    "ratingHints" : {
        "2" : "Not Acceptable",
        "4" : "Poor",
        "6" : "Satisfactory",
        "8" : "Good",
        "10" : "Excellent"
    },
    "question" : {
        "text" : "what's the deal with that?",
        "followup" : {
            "default" : "Tell us why privately",
            "options" : [
                {
                    "label" : "Gallery",
                    "value" : "gallery"
                },
                {
                    "label" : "Description",
                    "value" : "description"
                },
                {
                    "label" : "Pricing",
                    "value" : "pricing"
                },
                {
                    "label" : "Delivery time",
                    "value" : "delivery-time"
                },
                {
                    "label" : "Other",
                    "value" : "other"
                }
            ]
        }
    }
}