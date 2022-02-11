const db=require('../models')
const item = db.items;
exports.create= async (req, res)=>{
    if(!req.body.items){
        res.status(400).send({message:"Content cannot be empty"})
        return;
    }
    const item1=new item({
        items: req.body.items,
        product_ids:req.body.product_ids,
        prices:req.body.prices,
        descriptions:req.body.descriptions,
        dimensions:req.body.dimensions,
        img_urls:req.body.img_urls,
        category:req.body.category,
        prod_page_urls:req.body.prod_page_urls,
        new_category:req.body.new_category,
        chair:req.body.chair,
        diningchair:req.body.diningchair,
        accentchair:req.body.accentchair,
        outdoorchair:req.body.outdoorchair,
        loungechair:req.body.loungechair,
        rockingchair:req.body.rockingchair,
        table:req.body.table,
        consoletable:req.body.consoletable,
        coffeetable:req.body.coffeetable,
        diningtable:req.body.diningtable,
        outdoortable:req.body.outdoortable,
        changingtable:req.body.changingtable,
        entrytable:req.body.entrytable,
        cocktailtable:req.body.cocktailtable,
        dresserchest:req.body.dresserchest,
        sofa:req.body.sofa,
        sectionalsofa:req.body.sectionalsofa,
        outdoorsofa:req.body.outdoorsofa,
        desk:req.body.desk,
        standingdesk:req.body.standingdesk,
        roll_topdesk:req.body.roll_topdesk,
        executivedesk:req.body.executivedesk,
        bench:req.body.bench,
        bedroombench:req.body.bedroombench,
        entrywaybench:req.body.entrywaybench,
        kitchenbench:req.body.kitchenbench,
        outdoorbench:req.body.outdoorbench,
        bar_cart:req.body.bar_cart,
        tv_standconsole:req.body.tv_standconsole,
        sideboard:req.body.sideboard,
        stoolottoman:req.body.stoolottoman,
        barstool:req.body.barstool,
        accentstool:req.body.accentstool,
        outdoorstool:req.body.outdoorstool,
        outdoorottoman:req.body.outdoorottoman,
        bookshelvesbookcasesopenshelves:req.body.bookshelvesbookcasesopenshelves,
        cabinet:req.body.cabinet,
        filingcabinet:req.body.filingcabinet,
        accentcabinet:req.body.accentcabinet,
        barcabinet:req.body.barcabinet,
        chaise:req.body.chaise,
        outdoorchaise:req.body.outdoorchaise,
        wardrobe:req.body.wardrobe,
        side_tablenightstand:req.body.side_tablenightstand,
        vanitieswashstands:req.body.vanitieswashstands,
        makeupvanities:req.body.makeupvanities,
        bed:req.body.bed,
        headboard:req.body.headboard,
        racks_hooksladder:req.body.racks_hooksladder,
        crib:req.body.crib,
        metal:req.body.metal,
        brass:req.body.brass,
        bronze:req.body.bronze,
        steel:req.body.steel,
        aluminum:req.body.aluminum,
        iron:req.body.iron,
        wood:req.body.wood,
        oak:req.body.oak,
        hardwood:req.body.hardwood,
        pine:req.body.pine,
        birch:req.body.birch,
        bamboo:req.body.bamboo,
        maple:req.body.maple,
        cherry:req.body.cherry,
        walnut:req.body.walnut,
        mahogany:req.body.mahogany,
        plywood:req.body.plywood,
        ash:req.body.ash,
        patina:req.body.patina,
        cedar:req.body.cedar,
        poplar:req.body.poplar,
        fir:req.body.fir,
        chesnut:req.body.chesnut,
        sapele:req.body.sapele,
        hickory:req.body.hickory,
        cypress:req.body.cypress,
        redwood:req.body.redwood,
        sycamore:req.body.sycamore,
        rosewood:req.body.rosewood,
        stone:req.body.stone,
        concrete:req.body.concrete,
        marble:req.body.marble,
        quartz:req.body.quartz,
        granite:req.body.granite,
        finished:req.body.finished,
        unfinished:req.body.unfinished,
        sanded:req.body.sanded,
        fabric:req.body.fabric,
        leathers:req.body.leathers,
        glass:req.body.glass,
        volume:req.body.volume,
        max_dim:req.body.max_dim,
        high_quantity:req.body.high_quantity
    });

    item1.save(item1)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message ||"error occured "
        });
    });
};

// Retrieve all Items from the database.
exports.findAll = (req, res) => {
    const items = req.query.items;
    var condition = items ? { items: { $regex: new RegExp(items), $options: "i" } } : {};
  
    item.find(condition)
      .then(data => {
        console.log('Item Data', data);
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving items."
        });
      });
  };
  
  // Find a single Item with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    item.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found item with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving item with id=" + id });
      });
  };
  
  // Update a Item by the id in the request
  exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    item.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update item with id=${id}. Maybe item was not found!`
          });
        } else res.send({ message: "item was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating item with id=" + id
        });
      });
  };
  
  // Delete a Item with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    item.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete item with id=${id}. Maybe item was not found!`
          });
        } else {
          res.send({
            message: "item was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete item with id=" + id
        });
      });
  };
