const tesmonialData = [
    {
        name : "Emma Thompson",
        photoUrl : "https://media.istockphoto.com/id/1460124878/photo/social-media-connection-and-woman-typing-on-a-phone-for-communication-app-and-chat-web-search.jpg?s=1024x1024&w=is&k=20&c=OEumglh0LddR8e2IG7FWSK-lG76tUhjhQGksCY64ubM=",
        text : "I am highly impressed with Apple's innovative phone technology. The sleek design and user-friendly interface make it a top choice for tech-savvy individuals. I can't imagine my day without my Apple phone!",
    },
    {
        name : "Emily Thompson",
        photoUrl : "https://media.istockphoto.com/id/1493903457/photo/korean-man-working-in-latin-america.jpg?s=612x612&w=is&k=20&c=mV37iFj_Ferz4DUd2lCupo-xT29B88EyENEQ6azqDsY=",
        text : "Tesla's innovative electric cars are truly revolutionary. I was impressed by the sleek design and cutting-edge technology. The performance exceeded my expectations and the environmentally-friendly aspect is a huge bonus. I highly recommend Tesla for anyone looking for a top-of-the-line vehicle.",
    },
    {
        name : "Emily Johnson",
        photoUrl : "https://media.istockphoto.com/id/2000672703/photo/portrait-of-mature-indian-or-latin-business-man-ceo-trader-using-laptop-computer-typing.jpg?s=612x612&w=0&k=20&c=rq5Mp_8Lp1zi_7f8IumonDJTbhtgIoutU1D354rKkec=",
        text : "I was blown away by the incredible craftsmanship of the spaceship I purchased from nasa. The attention to detail and technology used are truly out of this world. My whole family loves our new adventure-ready spaceship!",
    },
    {
        name : "Sarah Reynolds",
        photoUrl : "https://media.istockphoto.com/id/1778899220/photo/adult-man-with-eyeglasses-stand-at-home-use-mobile-phone-sms-texting.jpg?s=612x612&w=0&k=20&c=JXUSY71Lqd8yuHU7aDk9nZAol3rREGHdNn6TgIIxuOI=",
        text : "I am beyond impressed with the innovative solutions provided by Microsoft. Their application is user-friendly, efficient, and has greatly improved my workflow. I highly recommend Microsoft for all your software needs.",
    },
    {
        name : "Samantha Lee",
        photoUrl : "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text : "I am beyond impressed with Tesla's innovative cars. The sleek design, cutting-edge technology, and eco-friendly features truly set them apart in the automotive industry. I can't imagine driving anything else now that I've experienced the brilliance of Tesla.",
    },
    {
        name : "Emily Johnson",
        photoUrl : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
        text : "I am thoroughly impressed by the innovative technology and sleek design of the cars from Tesla. Driving a Tesla is truly a futuristic experience that seamlessly integrates sustainability and luxury.",
    },
];


const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".user-name")

let idx = 0;

updateTestimional();

function updateTestimional(){
    const{name, photoUrl,text} = tesmonialData[idx];
    imgEl.src = photoUrl;
    textEl.innerHTML = text;
    nameEl.innerHTML = name;
    idx++
    if(idx === tesmonialData.length){
        idx = 0
    }
    setTimeout(() => {
       updateTestimional()
    },10000);
}
