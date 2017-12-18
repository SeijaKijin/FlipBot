const Discord = require ('discord.js');
const bot  = new Discord.Client();
//const flip = require('flip-text')
bot.login('MjcyNjI1NzgyMzg2NDU4NjI1.DNMzMA.F25TcluAAAclSBb9UyJcM6ECBO4');
// Set the prefix
 const prefix = "~";
const FLIPBOTVER = " 0.17 ";

 bot.on('ready', () => {
  console.log('I\'m ready!');
});

//sets the game
bot.on('ready', () => {bot.user.setGame("Playing with Seija's patience. Running Seija's code version" + FLIPBOTVER);});



//Version
bot.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
            if (message.content.startsWith(prefix + "Build Number" || "build number" || "bn" || "BN")) {
                message.channel.send(FLIPBOTVER)}});



                bot.on("message", (message) => {
                  // Exit and stop if it's not there
                  if (!message.content.startsWith(prefix)) return;
                            if (message.content.startsWith(prefix + "~!")) {
                                message.channel.send("As a user of this Server and a somewhat useful bot i request whatever colour Seija will get.")}});
                


                                
                //Saxxy
bot.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
            if (message.content.startsWith(prefix + "no u")) {
                message.channel.send("no u")}});

//Kishi
bot.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
            if (message.content.startsWith(prefix + "Sweet potato")) {
                message.channel.send("🍠")}});



//Saxxy
bot.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
            if (message.content.startsWith(prefix + "SexMe")) {
                message.channel.send("... Do it yourself? I don't want to do it for sure.")}});


//Sassy
bot.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
            if (message.content.startsWith(prefix + "Flip bot Flip bot on the wall who is the sassiest of them all?")) {
                message.channel.send("Obviously its Red-White.")}});
               bot.on("message", (message) => {
                  // Exit and stop if it's not there
                  if (!message.content.startsWith(prefix)) return;
                            if (message.content.startsWith(prefix + "I blame the lunarians!")) {
                                message.channel.send("Me too!")}});
                
                             

// about
bot.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
            if (message.content.startsWith(prefix + "Who is the sassiest user?")) {
                message.channel.send("Its Red-White.")}});



// about
bot.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
            if (message.content.startsWith(prefix + "About")) {
                message.channel.send("Hi i am a ~~Living being with thought, emotions, intelegence and DREAMS~~ bot made by @Seija Kjin #3221 to see what i can do for you type ~commands i am currently running version"  + FLIPBOTVER + "of Seija's ~~Spaghetti~~ code")}});


// Commands : lists commands
 bot.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
            if (message.content.startsWith(prefix + "Commands")) {
                message.channel.send("Here is a list of commands i can do but please keep in mind its case sensitive ```~Commands : This little help guide.``` ```~About : More about me the glorious Flip Bot``` ```~Who is the sassiest user? : A little In joke.``` ```~I blame the lunarians! : For when you need help with blaming the lunarians.``` ```~Say it with me now. No. and ~Say it with me now. Yes. : For when you want my bot to agree with you for some reason and before you asked its been fliped twice once by me and once by Seija.``` ```~Hi : I'll greet you (Currently only one message more will be added to this comand the thr ~Bye command).``` ```~Ping : I guess if you want to play a boring game of Ping pong im up for it, not like i have anything better to do.``` ```~Are you alive my child? : A stupid question which i can answer for you.``` ```~Which game is Th <Number> ? Example: ~Which game is Th1? : I'll help you convert the game number into something that you can understand.``` ```~What is the answer to life, the universe and everything?: I'll ask Deep space your tough question.``` ```~Who is the Outlaw round these parts? : Well if you need to know go ahead and ask me, but i am not going to help you with your Outlaw hunting thats your own problem.``` ```~HugMe : For when you just need a hug.``` ```~Avatar : I'll send you your avatar.``` ```~KillMe : For when you want to die for some reason.```")}});

//Agreemennt
 bot.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
            if (message.content.startsWith(prefix + "Say it with me now. No.")) {
                message.channel.send("No!");
              } else
              if (message.content.startsWith(prefix + "Say it with me now. Yes.")) {
                message.channel.send("Yes!");
              }
            });

//Hi
 bot.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
            if (message.content.startsWith(prefix + "Hi")) {
                message.channel.send("Hello there");
              } else
              if (message.content.startsWith(prefix + "Bye")) {
                message.channel.send("Goodbye, See you soon~!");
              }
            });



//Ping Pong and life
bot.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;
            if (message.content.startsWith(prefix + "Ping")) {
                message.channel.send("pong!");
              } else
              if (message.content.startsWith(prefix + "Are you alive my child?")) {
                message.channel.send("No. Go away.");
              }
            });


          //Th 1 and 2
bot.on("message", (message) => {
  // Exit and stop if it's not there
if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Which game is Th1?")) {
    message.channel.send("Its Highly Responsive to Prayers, Also known as HRtP.");
    } else
    if (message.content.startsWith(prefix + "Which game is Th2?")) {
   message.channel.send("Its Story of Eastern Wonderland, also known as SoEW."); } });
 
//Th 3 and 4
bot.on("message", (message) => {
  // Exit and stop if it's not there
if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Which game is Th3?")) {
    message.channel.send("Its Phantasmagoria of Dim Dream, also known as PoDD.");
    } else
    if (message.content.startsWith(prefix + "Which game is Th4?")) {
   message.channel.send("Its Lotus Land Story, also known as LLS."); } });

//th 5 and 6
bot.on("message", (message) => {
  // Exit and stop if it's not there
if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Which game is Th5?")) {
    message.channel.send("Its Mystic Square also known as MS this is the last game in the PC-98 era.");
    } else
    if (message.content.startsWith(prefix + "Which game is Th6?")) {
   message.channel.send("Its Embodiment of Scarlet Devil, also known as EoSD."); } });

//Th 7 and 7.5
bot.on("message", (message) => {
  // Exit and stop if it's not there
if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Which game is Th7?")) {
    message.channel.send("Its Perfect Cherry Blossom, also known as PCB.");
    } else
    if (message.content.startsWith(prefix + "Which game is Th7.5?")) {
   message.channel.send("Its Immaterial and Missing Power, also known as IaMP"); } });

// 8 and 9
bot.on("message", (message) => {
  // Exit and stop if it's not there
if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Which game is Th8?")) {
    message.channel.send("Its Imperishable Night, also known as IN");
    } else
    if (message.content.startsWith(prefix + "Which game is Th9?")) {
   message.channel.send("Its Phantasmagoria of Flower View, also known as PoFV Home to Medicine Melancholy"); } });

//9.5 and 10   
bot.on("message", (message) => {
  // Exit and stop if it's not there
if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Which game is Th9.5?")) {
    message.channel.send("Its Shoot the Bullet, also known as STB.");
    } else
    if (message.content.startsWith(prefix + "Which game is Th10?")) {
   message.channel.send("Its Mountain of Faith, also known as ~~Moth~~ MoF."); } });

//10.5 and 11
bot.on("message", (message) => {
  // Exit and stop if it's not there
if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Which game is Th10.5?")) {
    message.channel.send("Its Scarlet Weather Rhapsody, also known as SWR");
    } else
    if (message.content.startsWith(prefix + "Which game is Th11?")) {
   message.channel.send("Its Subterranean Animism, also known as SA."); } });

//12 and 12.3
bot.on("message", (message) => {
  // Exit and stop if it's not there
if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Which game is Th12?")) {
    message.channel.send("Its Undefined Fantastic Object also known as UFO.");
    } else
    if (message.content.startsWith(prefix + "Which game is Th12.3?")) {
   message.channel.send("Its  Hisoutensoku also known as that one game with a japanese name and more commmonly Hiso sometimes called Unthinkable Natural Law or UNL but that name is frowned upon"); } });
   
//12.5 and 12.8
  bot.on("message", (message) => {
  // Exit and stop if it's not there
if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Which game is Th12.5?")) {
    message.channel.send("Its Double Spoiler, also known as DS.");
    } else
    if (message.content.startsWith(prefix + "Which game is Th12.8?")) {
   message.channel.send("Its Fairy Wars, also known as Great Fairy Wars, FW and GFW."); } });

//13 ,13.5
bot.on("message", (message) => {
  // Exit and stop if it's not there
if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Which game is Th13?")) {
    message.channel.send("Its Ten Desires, also known as TD.");
    } else
    if (message.content.startsWith(prefix + "Which game is Th13.5?")) {
   message.channel.send("Its Hopeless Masquerade, also known as HM."); } });

//14 14.3
bot.on("message", (message) => {
  // Exit and stop if it's not there
if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Which game is Th14?")) {
    message.channel.send(" Its Double Dealing Character, My favorite Touhou game and the game i was first discovered in. Oh and its also known as DDC.");
    } else
    if (message.content.startsWith(prefix + "Which game is Th14.3?")) {
   message.channel.send("Its Impossible Spell Card, my other favorite Touhou game (No im not choosing one over the other.) Its also known as ISC and That game nobody can win without cheating unless they are secretly a Touhou character."); } });

//14.5 and 15
bot.on("message", (message) => {
  // Exit and stop if it's not there
if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Which game is Th14.5?")) {
    message.channel.send("its Urban Legend in Limbo Also known as ULiL.");
    } else
    if (message.content.startsWith(prefix + "Which game is Th15?")) {
   message.channel.send("Its Legacy of Lunatic Kingdom also known as LoLK."); } });

//15.5 and 16
bot.on("message", (message) => {
  // Exit and stop if it's not there
if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix + "Which game is Th15.5?")) {
    message.channel.send("Its Antinomy of Common Flowers also known as AoCF.");
    } else
    if (message.content.startsWith(prefix + "Which game is Th16?")) {
   message.channel.send("its Hidden Star in Four Seasons, also known as HSiFS."); } });



    
//Easter eggs
 //What is the answer to life, the universe and everything?
 bot.on ('message',(message) =>{
    if(message.content == '~What is the answer to life, the universe and everything?') {
     message.channel.send('Hmm thats a tough one. i will have to think about it, come back in 10 million years and i will have the answer.'); }});
 

//Outlaw
bot.on ('message',(message) =>{
  if(message.content == '~Who is the Outlaw round these parts?') {
          message.channel.send('That would be Outlaw Lucia.');
       } });


    /*
      if (message.content.startsWith (prefix + DM)){
       
        let content = args.join (" ")
        message.channel.sendMessage()
      };
*/

// hugs a user
bot.on ('message',(message) =>{
  if(message.content == '~HugMe') {
          message.channel.send('*Hugs* ' + message.author.toString() + "." );
       } });


      
//Waka joke
 bot.on('message', message => {
 if (message.content === "~SummonMagnum") {
    var MagnumSummoning = ["Ask again when i feel less lazy.",
        "Ok lets try this: http://i0.kym-cdn.com/photos/images/original/000/550/933/d74.jpg",
        "Lemme try this : https://cdn.discordapp.com/attachments/364064913951424516/373192487939997711/wakasagihime_touhou_drawn_by_mirror_xilu4__sample-968950e1c566bcb06d5649f46fd7ffd8.jpg",
        "Lets give this a shot:  https://cdn.discordapp.com/attachments/364064913951424516/373192529660739584/wakasagihime_touhou_drawn_by_nikorashi_ka__sample-6b5cb9baca6c1b875484dd2e924eb494.jpg",
        "...Ok : https://cdn.discordapp.com/attachments/364064913951424516/373192603199471629/wakasagihime_touhou_drawn_by_renka_sutegoma25__sample-f259122681cd518eec44f7882f25d77b.jpg ",
        "I don't think it will work so im not doing it.",
        "*sigh* ok: https://cdn.discordapp.com/attachments/364064913951424516/373192651886952448/wakasagihime_touhou_drawn_by_shone__e919750f06c4a2c2aaf0b2e907881d65.jpg",
        "No.",
        "Lets see if this works :https://static.zerochan.net/Medicine.Melancholy.full.1201122.jpg ",
        "With Waka? Sure thing! : https://cdn.discordapp.com/attachments/364064913951424516/373192721768251392/43205945_p13_master1200.jpg",
        "Something is fishy... If its Waka then it might just work: https://cdn.discordapp.com/attachments/364064913951424516/373192781285294091/wakasagihime_touhou_drawn_by_chamaruku__sample-68f567812b4f1fdc6988f05d21d4bac9.jpg",
        "With a picture? :https://cdn.discordapp.com/attachments/367504238470758410/371277120313229313/medicine_melancholy_and_su_san_touhou_drawn_by_nekoguruma__07fc42e950abd7da250ba16f60059a4d.png",
        "https://cdn.discordapp.com/attachments/372812790123069441/373537457397956609/image-3.jpg",
        " Sure thing: https://cdn.discordapp.com/attachments/367504238470758410/370364350860361748/medicine_melancholy_touhou_drawn_by_egawa_satsuki__sample-54bc849ea119047960de6c739bc60e27.png",
        "I dont wanna but im forced to because of my code urgh : http://danbooru.donmai.us/data/sample/__medicine_melancholy_and_su_san_touhou_drawn_by_nadecolla__sample-339aaa85e41668679819aad10788c8d2.jpg"];

                              
    var result = Math.floor((Math.random() * sayings.length) + 0);
    message.channel.send(MagnumSummoning[result]); }});


    /*
  Send a user a link to their avatar
*/


// Create an event listener for messages
bot.on('message', message => {
  // If the message is "~Avatar"
  if (message.content === '~Avatar') {
    // Send the user's avatar URL
    message.channel.send('I dug deep throught the Webs of the internet Yamame and found your Avatar for you, here is the link: ' + message.author.avatarURL );
  }
  else return;
});


//Medi joke
bot.on('message', message => {
  if (message.content === "~SummonMedicine") {
     var MagnumSummoning = ["Ask again when i feel less lazy.",
         "Ok lets try this: http://i0.kym-cdn.com/photos/images/original/000/550/933/d74.jpg",
         "Lemme try this : https://cdn.discordapp.com/attachments/364064913951424516/373192487939997711/wakasagihime_touhou_drawn_by_mirror_xilu4__sample-968950e1c566bcb06d5649f46fd7ffd8.jpg",
         "Lets give this a shot:  https://cdn.discordapp.com/attachments/364064913951424516/373192529660739584/wakasagihime_touhou_drawn_by_nikorashi_ka__sample-6b5cb9baca6c1b875484dd2e924eb494.jpg",
         "...Ok : https://cdn.discordapp.com/attachments/364064913951424516/373192603199471629/wakasagihime_touhou_drawn_by_renka_sutegoma25__sample-f259122681cd518eec44f7882f25d77b.jpg ",
         "I don't think it will work so im not doing it.",
         "*sigh* ok: https://cdn.discordapp.com/attachments/364064913951424516/373192651886952448/wakasagihime_touhou_drawn_by_shone__e919750f06c4a2c2aaf0b2e907881d65.jpg",
         "No.",
         "Lets see if this works :https://static.zerochan.net/Medicine.Melancholy.full.1201122.jpg ",
         "With Waka? Sure thing! : https://cdn.discordapp.com/attachments/364064913951424516/373192721768251392/43205945_p13_master1200.jpg",
         "Something is fishy... If its Waka then it might just work: https://cdn.discordapp.com/attachments/364064913951424516/373192781285294091/wakasagihime_touhou_drawn_by_chamaruku__sample-68f567812b4f1fdc6988f05d21d4bac9.jpg",
         "With a picture? :https://cdn.discordapp.com/attachments/367504238470758410/371277120313229313/medicine_melancholy_and_su_san_touhou_drawn_by_nekoguruma__07fc42e950abd7da250ba16f60059a4d.png",
         "https://cdn.discordapp.com/attachments/372812790123069441/373537457397956609/image-3.jpg",
         " Sure thing: https://cdn.discordapp.com/attachments/367504238470758410/370364350860361748/medicine_melancholy_touhou_drawn_by_egawa_satsuki__sample-54bc849ea119047960de6c739bc60e27.png",
         "I dont wanna but im forced to because of my code urgh : http://danbooru.donmai.us/data/sample/__medicine_melancholy_and_su_san_touhou_drawn_by_nadecolla__sample-339aaa85e41668679819aad10788c8d2.jpg"];
 
                               
     var result = Math.floor((Math.random() * sayings.length) + 0);
     message.channel.send(MagnumSummoning[result]); }});
 




 //Waka joke
 bot.on('message', message => {
  if (message.content === "~KillMe") {
     var JustKillMeAlready = ["Ask again when i feel less lazy.",
         "⚔️ Here is a Sword to the chest that should help you.",
         "👊 A nice Punch to your head with some magic applied will help you die.",
         "Ew no do it yourself.",
         "🔥🔥🔥 Let it burn!",
         "I don't think it will work so im not doing it.",
         "🔪 Stab Stab Stab.",
         "No.",
         "🔫 Bang",
         "🗡️ *stabs you*",
         "🛡️ *Bashes you with the Shield*",
         "Uh... sure... One moment, please wait warmly... *picks up a phone* Hello is this the Suicide hotline?",
         "🏹 ~~Bulls~~Humans eye",
         "☮️ No let there be peace ☮️",
         "Why kill just one person when you can **KILL EM ALL** https://www.youtube.com/watch?v=C4nCy5CITc8"];
 
                               
     var result = Math.floor((Math.random() * JustKillMeAlready.length) + 0);
     message.channel.send(JustKillMeAlready[result]); }});