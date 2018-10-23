const getNavList = require('../../../model/getNavList')
module.exports = async (ctx) => {
    let navList = await getNavList()
    ctx.render('admin/update-nav.html', {
        navList
    })
}