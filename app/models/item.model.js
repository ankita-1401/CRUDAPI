module.exports = mongoose => {
    const item = mongoose.model("item", mongoose.Schema(
        {
            items: {
                type: String
            },
            product_ids: {
                type: String
            },
            prices: {
                type: String
            },
            descriptions: {
                type: String
            },
            dimensions: {
                type: String
            },
            img_urls: {
                type: String
            },
            category: {
                type: String
            },
            prod_page_urls: {
                type: String
            },
            new_category: {
                type: String
            },
            chair:
            {
                type: String
            },
            diningchair: {
                type: String
            },

            accentchair: {
                type: String
            },

            outdoorchair: {
                type: String
            },

            loungechair: {
                type: String
            },

            rockingchair: {
                type: String
            },

            table: {
                type: String
            },

            consoletable: {
                type: String
            },

            coffeetable:
            {
                type: String
            },


            diningtable: {
                type: String
            },
            outdoortable: {
                type: String
            },

            changingtable: {
                type: String
            },

            entrytable: {
                type: String
            },

            cocktailtable: {
                type: String
            },

            dresserchest: {
                type: String
            },

            sofa: {
                type: String
            },

            sectionalsofa:
            {
                type: String
            },

            outdoorsofa:
            {
                type: String
            },

            desk: {
                type: String
            }
            ,
            standingdesk: {
                type: String
            },
            roll_topdesk: {
                type: String
            },

            executivedesk: {
                type: String
            },

            bench: {
                type: String
            },

            bedroombench: {
                type: String
            },

            entrywaybench: {
                type: String
            },

            kitchenbench: {
                type: String
            },

            outdoorbench: {
                type: String
            },

            bar_cart: {
                type: String
            },
            tv_standconsole: {
                type: String
            },

            sideboard: {
                type: String
            },

            stoolottoman: {
                type: String
            },

            barstool: {
                type: String
            },

            accentstool: {
                type: String
            },

            outdoorstool: {
                type: String
            },

            outdoorottoman: {
                type: String
            },

            bookshelvesbookcasesopenshelves: {
                type: String
            },

            cabinet: {
                type: String
            },


            filingcabinet: {
                type: String
            },

            accentcabinet: {
                type: String
            },

            barcabinet: {
                type: String
            },

            chaise: {
                type: String
            },

            outdoorchaise: {
                type: String
            },

            wardrobe: {
                type: String
            },

            side_tablenightstand: {
                type: String
            },

            vanitieswashstands: {
                type: String
            },

            makeupvanities: {
                type: String
            },

            bed: {
                type: String
            },

            headboard: {
                type: String
            },
            racks_hooksladder: {
                type: String
            },
            crib: {
                type: String
            },
            metal: {
                type: String
            },
            brass: {
                type: String
            },
            bronze: {
                type: String
            },
            steel: {
                type: String
            },
            aluminum: {
                type: String
            },
            iron: {
                type: String
            },
            wood: {
                type: String
            },
            oak: {
                type: String
            },
            hardwood: {
                type: String
            },
            pine: {
                type: String
            },
            birch: {
                type: String
            },
            bamboo: {
                type: String
            },
            maple: {
                type: String
            },
            cherry: String,
            walnut: String,
            mahogany: String,
            plywood: String,
            ash: String,
            patina: String,
            cedar: String,
            poplar: String,
            fir: String,
            chesnut: String,
            sapele: String,
            hickory: String,
            cypress: String,
            redwood: String,
            sycamore: String,
            rosewood: String,
            stone: String,
            concrete: String,
            marble: String,
            quartz: String,
            granite: String,
            finished: String,
            unfinished: String,
            sanded: String,
            fabric: String,
            leathers: String,
            glass: String,
            volume: String,
            max_dim: String,
            high_quantity: String

        }
    ));
    return item;
};