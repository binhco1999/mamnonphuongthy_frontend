function Contact() {
    return (
        <div className="container bg-gradient-to-r from-pink-300 to-yellow-300">
            <div className=" flex justify-center align-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.7554727665606!2d106.62964601461663!3d10.119090892769604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x319ffdfcd72b994d%3A0xf5477626fd9abaf!2zTeG6p20gTm9uIFTGsCBUaOG7pWMgUGjGsMahbmcgVGh5!5e0!3m2!1sen!2s!4v1664679414697!5m2!1sen!2s"
                    width={800}
                    height={600}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}

export default Contact;
