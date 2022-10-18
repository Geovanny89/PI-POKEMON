const router = require("express").Router();
//const getApiTypes = require("../Controllers/Type/getApiType");
const getApiType = require('../Controllers/Type/getApiType')

router.get("/types", async (req, res) => {
  try {
    const allTypes = await getApiType();
    res.send(allTypes);
  } catch (error) {
    console.log(error);
  }
}); 


module.exports = router;