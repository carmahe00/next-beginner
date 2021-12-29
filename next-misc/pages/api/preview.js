export default function handler(req, res) {
    res.setPreviewData({user: "Jhon"})
    res.redirect(req.query.redirect)
}