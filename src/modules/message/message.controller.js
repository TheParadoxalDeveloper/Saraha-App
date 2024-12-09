import QRCode from 'qrcode'
import { Message } from '../../../database/models/message.model.js';



export const getMessages = async (req, res) => {
  let qrCodeUrl;
  let url = `${req.protocol}://${req.get('host')}/user/${req.session.userId}`

  await QRCode.toDataURL(url).then(url => {
    qrCodeUrl = url
  }).catch(err => {
    console.error(err)
  })

  let messages = await Message.find({ user: req.session.userId })

  if (req.session.isLoggedIn) {
    res.render("messages.ejs", { session: req.session, url, qrCodeUrl, messages });
  } else {
    res.redirect("/login");
  }

};