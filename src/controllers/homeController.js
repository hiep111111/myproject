const handleHelloworld = (req,res) => {
    const name = "Hiep"
    return res.render("home.ejs" , {name} );

}
const handleUserPage = (req,res) => {
    const name = "Hiep"
    return res.render("user.ejs" );

}


module.exports = {
    handleHelloworld,
    handleUserPage
}