import { createContext, useContext, useReducer } from "react";
import { reducer } from './reducers';

const initialState= {
    users: [
        {
            "username": "confident_owl",
            "password": "password123",
            "role": "listener",
            "expertise": "personal"
        },
        {
            "username": "majestic_owl",
            "password": "password456",
            "role": "listener",
            "expertise": "personal"
        },
        {
            "username": "kindly_owl",
            "password": "password789",
            "role": "listener",
            "expertise": "personal"
        },
        {
            "username": "handsome_owl",
            "password": "password1011",
            "role": "listener",
            "expertise": "personal"
        },
        {
            "username": "eccentric_owl",
            "password": "password1213",
            "role": "listener",
            "expertise": "financial"
        },
        {
            "username": "gifted_owl",
            "password": "password1415",
            "role": "listener",
            "expertise": "personal"
        },
        {
            "username": "bashful_owl",
            "password": "password1617",
            "role": "listener",
            "expertise": "career"
        },
        {
            "username": "unpredictable_owl",
            "password": "password1819",
            "role": "listener",
            "expertise": "financial"
        },
        {
            "username": "spontaneous_owl",
            "password": "password2021",
            "role": "listener",
            "expertise": "personal"
        },
        {
            "username": "steadfast_owl",
            "password": "password2223",
            "role": "listener",
            "expertise": "career"
        },
        {
            "username": "diurnal_owl",
            "password": "password2425",
            "role": "listener",
            "expertise": "personal"
        },
        {
            "username": "lucky_owl",
            "password": "password2627",
            "role": "listener",
            "expertise": "career"
        },
        {
            "username": "adipose_lion",
            "password": "password2829",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "jubilant_giraffe",
            "password": "password3031",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "agnostic_elephant",
            "password": "password3233",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "pious_zebra",
            "password": "password3435",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "energetic_tiger",
            "password": "password3637",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "equivocal_bear",
            "password": "password3839",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "decisive_dolphin",
            "password": "password4041",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "charming_penguin",
            "password": "password4243",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "organized_eagle",
            "password": "password4445",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "discombobulated_koala",
            "password": "password4547",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "copacetic_kangaroo",
            "password": "password4849",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "mindful_gorilla",
            "password": "password5051",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "compassionate_panda",
            "password": "password5253",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "quirky_monkey",
            "password": "password5455",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "tactile_turtle",
            "password": "password5657",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "estranged_octopus",
            "password": "password5859",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "apposite_armadillo",
            "password": "password6061",
            "role": "sharer",
            "expertise": ""
        },
        {
            "username": "wandering_hedgehog",
            "password": "password6263",
            "role": "sharer",
            "expertise": ""
        }
      ],
    currentUser: null,
    conversations: [
    {
        "conversationTitle": "Spendthrift Spouse",
        "conversationText": "My wife spends too much money! She buys $6 Starbucks coffees every day while I am trying to pay off student debt. How can we get on the same page about finances?",
        "username": "charming_penguin",
        "is_closed": false,
        "expertise": "financial",
        "comments": [
            {
                "comment": "This is both a financial problem, and a personal problem. Can I ask, are you newlyweds, or is this a long-established pattern",
                "username": "majestic_owl"
            },
            {
                "comment": "We were married 18 months ago.",
                "username": "charming_penguin"
            },
            {
                "comment": "To get to the root of spending habits you should explore together family context and attitudes to what the meaning and purpose of money is.",
                "username": "majestic_owl"
            },
            {
                "comment": "Many people just don't know how much money gets away from them by buying coffee at Starbucks daily. Figure out some way to track it. I think she'd take your concerns more seriously if she saw the total.",
                "username": "kindly_owl"
            },
            {
                "comment": "It will be important to raise this with her in a positive context. What are some goals you can set together as a couple that will only be possible if you control impulse spending in the short-term?",
                "username": "tactile_turtle"
            }
        ]
    },
    {
        "conversationTitle": "Job Prospects in Tech",
        "conversationText": "Looking for guidance in my career path. I am wondering if AI is going to make computer programmers obsolete.",
        "username": "estranged_octopus",
        "is_closed": false,
        "expertise": "career",
        "comments": [
            {
                "comment": "Tech is a big field. Is it software engineering you are particularly considering?",
                "username": "handsome_owl"
            },
            {
                "comment": "I am just examining my options, so am open, but yes, I code as a hobby and was thinking of trying to turn it into a career.",
                "username": "estranged_octopus"
            },
            {
                "comment": "I think the prospects in software engineering are long-term solid, but it is a field that is constantly evolving so if you pursue it you will have to be prepared to keep upgrading your skills (as well as your software!).",
                "username": "handsome_owl"
            },
            {
                "comment": "I'm good with that. I was wondering specifically about the impact of AI.",
                "username": "estranged_octopus"
            },
            {
                "comment": "I've been in a software engineer for 3 years now. AI is huge, but not only in the programming world. It will be a game changer for a lot of fields, so that means a lot of jobs in tech for those who know about AI and can help businesses of all kinds integrate it.",
                "username": "apposite_armadillo"
            },
            {
                "comment": "Thanks, that's encouraging to hear!",
                "username": "estranged_octopus"
            }
        ]
    },
    {
        "conversationTitle": "Bereavement Advice",
        "conversationText": "My Mum lost her battle with cancer last year on my birthday. I am at university and am struggling with the effects of grief and loss. Does it ever get better?",
        "username": "discombobulated_koala",
        "is_closed": false,
        "expertise": "personal",
        "comments": [
            {
                "comment": "I'm so sorry about your loss. It is hard to lose a parent at any age, but part of what you are grieving is all the parts of your life that are yet to unfold that your mother will not be able to witness. Whenever you have a significant milestone or achievement it might help to include her in some way.",
                "username": "confident_owl"
            },
            {
                "comment": "Yes, deepest sympathy. I think it must be especially hard to have lost her on your birthday. Sometimes when freshly bereaved we can find that certain dates have power over us. It will help to take a mindfulness attitude toward this: notice that you are off-colour on a particular date, but don't let the emotion hold you in its grip. A date is just a date.",
                "username": "kindly_owl"
            },
            {
                "comment": "Grief is an intensely painful experience. Like physical pain and often the two are linked (ie. don't be surprised if you have physical manifestations of your emotional state). I can only say as one who has also lost a mother young, that you will never stop missing her, but the quality of the missing does change (becomes less intense). Hang in there.",
                "username": "adipose_lion"
            },
            {
                "comment": "Don't stop talking about her. It may make you feel undone and so you may avoid it, but talking about a loved one who has passed honours them -- it keeps them included in a certain way among the living.",
                "username": "lucky_owl"
            },
            {
                "comment": "Have you tried a grief support group or speaking to a university chaplain? When my father died, I found a grief group and it really helped. Your grief should never be compared to someone else's grief experience, but grief is very isolating. It can make you feel estranged from your happy-go-lucky friends at university. Connecting with others who have some experience of great loss can make you feel not so alone.",
                "username": "agnostic_elephant"
            }
        ]
    },
    {
        "conversationTitle": "Trouble Forgiving",
        "conversationText": "I have a co-worker who stole some of my work and then lied about it. We used to be friends, but how can we recover from such a betrayal?",
        "username": "agnostic_elephant",
        "is_closed": false,
        "expertise": "personal",
        "comments": [
            {
                "comment": "Betrayal is like a death of the relationship that was. Restoring a relationship with a person is possible but it is a process. If you find you are being placed under pressure to just go on with the relationship as before, be very clear about what needs to happen.",
                "username": "diurnal_owl"
            },
            {
                "comment": "Just cut the person loose. They showed you something about their essential character there. Take heed. Move on.",
                "username": "energetic_tiger"
            },
            {
                "comment": "I can't say I agree with you, energetic_tiger. I think forgiving others is always worthwhile, even if it doesn't lead to a restored relationship. It's something we do to give ourselves peace. Besides if a world ran on the principle that people move on as soon as someone disappoints them, there wouldn't be long-term relationships of any kind!",
                "username": "copacetic_kangaroo"
            },
            {
                "comment": "I agree with what copacetic_kangaroo said about forgiveness being something you do for yourself. It's certainly easier if the other person realizes what they've done and is able to express that in an apology, but whether you get that kind of satisfaction or not, you should make efforts to reach a point where seeing the person doesn't trigger you.",
                "username": "compassionate_panda"
            },
            {
                "comment": "Forgiveness is one thing, restoration of trust and relationship is another. You have to think of what you want in the workplace and work that kind of relationship first. Perhaps the return of personal warmth will come, perhaps not.",
                "username": "diurnal_owl"
            }
        ]
    },
    {
        "conversationTitle": "Seeking travel-friendly work",
        "conversationText": "I am looking for a career which will enable me freedom to travel",
        "username": "equivocal_bear",
        "is_closed": false,
        "expertise": "career",
        "comments": [
            {
                "comment": "I see you are searching for a career with location flexibility. Will this be your first job?",
                "username": "unpredictable_owl"
            },
            {
                "comment": "Yes, I am just finished university with a BA. I have only held temporary summer jobs.",
                "username": "equivocal_bear"
            },
            {
                "comment": "Did your BA have any specific area of specialty or expertise? Do you possess any particular attributes or skills which might be helpful in a particular job market?",
                "username": "unpredictable_owl"
            },
            {
                "comment": "Just a general Psych BA, with a minor in political science. I have some musical ability with the guitar. Also, I grew up in a household which spoke Czech, so I can understand and speak the language, but I do not write it.",
                "username": "equivocal_bear"
            },
            {
                "comment": "Have you considered adding ESL training to your resume? Many ESL programs are offered online, and it seems as though being an ESL instructor for the Czech market might be something you can do online, or even onsite with the Czech market as a European base, which would permit travel.",
                "username": "mindful_gorilla"
            },
            {
                "comment": "To be honest, just having finished a BA, the thought of further study is not what I am looking forward to. I would like to just get a job which would let me travel, but I kind of need to be making money soon.",
                "username": "equivocal_bear"
            },
            {
                "comment": "Maybe apply for a position within the cruise industry?",
                "username": "decisive_dolphin"
            },
            {
                "comment": "No, I would hate that -- not at all the kind of travel I have in mind!",
                "username": "equivocal_bear"
            },
            {
                "comment": "I think the ESL idea is pretty good. It will require a bit more time in study to be officially qualified, but once you have that, you can begin to apply with various ESL agencies, focussing on those who do their work online. Conversely, you could advertise independently, and begin to try to build a client base on your own. The only proviso would be that you would require internet access in the places you travel.",
                "username": "energetic_tiger"
            },
            {
                "comment": "I will look into it. For me it depends on how long the training would take and how much it costs, and then how long before I can get an income.",
                "username": "equivocal_bear"
            },
            {
                "comment": "I hope it works out for you!",
                "username": "unpredictable_owl"
            }
        ]
    },
    {
        "conversationTitle": "Stressed out at work",
        "conversationText": "I am finding work increasingly stressful, and this is causing me to resent my co-workers and hate my boss.",
        "username": "organized_eagle",
        "is_closed": false,
        "expertise": "career",
        "comments": [
            {
                "comment": "It looks like your work is not proving to be very satisfying. How long have you been in this current job?",
                "username": "gifted_owl"
            },
            {
                "comment": "I have had this job for just over a year. I did not really like it when I started but I thought I would get used to it once I got the hang of it. But the longer I do it, the less I like it, and just showing up everyday is a pain. I get super stressed out thinking about being here until I die.",
                "username": "organized_eagle"
            },
            {
                "comment": "It sounds to me like you need a change of workplace or even career. Is this your first job? What is the field? Is there much opportunity for a move?",
                "username": "bashful_owl"
            },
            {
                "comment": "It is my first job out of college. I am in tech support for a cell phone company. People call with the dumbest things and expect me to fix their problem when they fail to even describe what it is. It is so frustrating. Our calls are recorded and monitored, so I have to be really patient no matter how stupid the people are. Every once in a while my boss will give me hell for not solving their problem, or for patching them over to another person in the department. I could probably get another tech support job somewhere else but it would probably be just as bad.",
                "username": "organized_eagle"
            },
            {
                "comment": "You said you went to college. What was your diploma in?",
                "username": "pious_zebra"
            },
            {
                "comment": "Marketing and tourism. But despite lots of promises there were zero jobs in either field. A complete waste of time and money.",
                "username": "organized_eagle"
            },
            {
                "comment": "Have you kept looking in the marketing and tourism areas for employment opportunities since taking this tech job?",
                "username": "bashful_owl"
            },
            {
                "comment": "Not really. I got too discouraged after graduation when there was nothing. It is so depressing. I do not know if I am stressed or depressed, it is all coming out the same way. I hate my job and everybody in it, including me.",
                "username": "organized_eagle"
            },
            {
                "comment": "It sounds to me like you could use some more counseling than I am able to give you, to help you see a way out of your depression and stress. Does your workplace have a benefit package which would allow you to access some counseling?",
                "username": "pious_zebra"
            },
            {
                "comment": "No, that is why I came here!",
                "username": "organized_eagle"
            },
            {
                "comment": "I recommend you start a private conversation here. You'll get more focussed attention on ways to address your depression and stress. Once you can begin to see a light at the end of those tunnels, I would think that your job would be easier to tolerate, and you might even find the motivation to search more deeply for career opportunities in your field of training.",
                "username": "gifted_owl"
            }
        ]
    },
    {
        "conversationTitle": "Husband's Use of Porn",
        "conversationText": "My husband's use of pornography makes me feel like I am not enough",
        "username": "energetic_tiger",
        "is_closed": false,
        "expertise": "personal",
        "comments": [
            {
                "comment": "You raise a topic here that is very painful and personal. Hopefully the forum will try its best to be respectful and helpful. Can you tell us a little more about how he uses pornography and what he says when you try to engage him in a discussion about it?",
                "username": "confident_owl"
            },
            {
                "comment": "I find it pretty difficult to talk about with him. He laughs it off and says that all men do it, and quite a lot of women too, so it's my problem. He says he's not wanting to be with these other women in a way that threatens our marriage, that it's just a bit of fantasy, but I'm still left to wonder when we're being intimate if he's really being intimate with me, or imagining himself with one of them?",
                "username": "energetic_tiger"
            },
            {
                "comment": "Can I ask if there's anything in the pornography he looks at that pushes your boundaries sexually?  Is it the nature of the sexual acts that's the threat or just the fact that he's fantasizing about doing them with others?",
                "username": "tactile_turtle"
            },
            {
                "comment": "It's more the fact he's fantasizing about doing them with others. Perfect-looking others who set an impossibly unrealistic standard for what real women behave like sexually. It's not rape porn or kiddie porn or anything particularly twisty",
                "username": "energetic_tiger"
            },
            {
                "comment": "Well speaking as a man and also a urologist, I do think the prevalence of pornography in the internet age has had an extremely destructive effect upon men and upon relationships. We have a generation of men now who have been raised on it, and first sexual experiences are incredibly formative. The de-contextualized way in which pornography portrays the sexual act makes it almost impossible for a man who has become pornography-dependent to achieve arousal to the same degree without the tropes which are familiar in porn. So by definition his real-world relationship becomes dissatisfying. You are not wrong! You are not enough, not because there's anything wrong with you, but because his appetites have been misshapen. I meet men all the time in my practice you are dealing with sexual dysfunction because of porn.",
                "username": "handsome_owl"
            },
            {
                "comment": "Thank you, handsome_owl, for affirming what I have been feeling from a clinical perspective. It helps me to think of my husband's sexuality as 'damaged' instead of purposely hurtful. With such damage is there any hope?",
                "username": "energetic_tiger"
            },
            {
                "comment": "There is hope in neuro-plasticity. Even if certain pathways in the brain have been well-worn, it is possible to forge others. You will have to work on this intentionally and together. Unfortunately, right now it sounds as if he is not taking the problem seriously. I feel for you.",
                "username": "handsome_owl"
            },
            {
                "comment": "I'm speaking as a woman and one who at 24 belongs to the generation of which handsome_owl speaks, in which not one single guy I know is not 'dependent on the tropes' as _handsome owl_ put it for his definition of what a good sexual experience is. At this point I've been in two serious relationships and I came to the conclusion that I was never going to separate those guys from their smut, so I took the attitude that it was alright if they shared it with me, as opposed to something they felt they had to hide from me. It took me a while to figure out what they saw in some of it, but I found a genre I liked and which we were able to enjoy together. Now I'm on my own, and I still go to the screen for a bit of heat on a cold and frosty evening. I wouldn't say it was 'damaging' -- maybe try to pick your poison?", 
                "username": "equivocal_bear"
            },
            {
                "comment": "Regardless of what the real harm of pornography is (benign vs. very destructive), your husband's use of pornography is clearly doing harm to you by making you feel you are not enough, and he reinforces that harm when he 'laughs it off' and doesn't take your feelings seriously. Do not present an ultimatum that it's you or his mags because what you're dealing with here is an addiction (at the least a dependency) and you don't want to drive that underground. Instead work toward getting him to see this as a problem. Overcoming denial is the first step",
                "username": "copacetic_kangaroo" 
            },
            {
                "comment": "I think pornography not only plays on the insecurities of women it also panders to the insecurity of men. Affirm that he is enough for you, without his fantasy that he is the kind of man who could sexually satisfy a perfect 10. If you keep the focus on the porn wholly negative ('you must not!') the focus will only ever be on the porn. Instead you want the focus to be on you -- you and him. Don't miss the opportunity to draw him away from the fairly immature world of sexual short-cuts and cheap thrills toward something better. Have confidence in yourself and build confidence in him and he will find you irresistible.",
                "username": "apposite_armadillo"
            }
        ]
    },
    {
        "conversationTitle": "In-Law Trouble",
        "conversationText": "My mother-in-law has always been hugely annoying. Now I think my wife is turning into her mother. The thought terrifies me.",
        "username": "wandering_hedgehog",
        "is_closed": false,
        "expertise": "personal",
        "comments": [
            {
                "comment": "Hello! Welcome. I see that you are having some difficulties in your marriage. How long have you been married? And do you have children?",
                "username": "spontaneous_owl"
            },
            {
                "comment": "We have been married eight years, no children, thank God. I dated the woman who became my wife for about a half year before meeting her mother. We were already pretty committed to each other by then. Her mother is a real bag, and when I met her, the old adage about check out the mother cause that is what the daughter will become immediately came to my mind, but I laughed it off. We got married about a year later. I managed to avoid too many meetings with my mother-in-law leading up to the wedding, but you can only do so much. She lives 20 minutes away. What a nightmare. Scary looking broad too.",
                "username": "wandering_hedgehog"
            },
            {
                "comment": "You feel your wife is becoming her mother? Is this is recent development, or has it been a gradual sense that you have had?",
                "username": "spontaneous_owl"
            },
            {
                "comment": "It has gotten worse in the last year. Before I could just brush it off, but now it is getting scary. She's spending a lot of time with her mother, visiting three or four times a week, and when she comes back, or even just gets off the phone, she sounds exactly like her mother. Same tone of voice, same expressions. And now she's beginning to resemble her more and more. It's like Invasion of the Body Snatchers! I'll tell you, I never would have gotten married if I'd seen this coming!",
                "username": "wandering_hedgehog"
            },
            {
                "comment": "Have you spoken with your wife about this at all?",
                "username": "spontaneous_owl"
            },
            {
                "comment": "Are you f-ing kidding me? Once, about half a year ago, I casually said, Hey, you sound just like your mother when you said that, and I will tell you, life was not worth living for weeks afterward. I do not know what to do.",
                "username": "wandering_hedgehog"
            },
            {
                "comment": "Do you think your wife would be open to some form of marriage counselling or couples therapy? Is there any way you can think of to introduce that subject with her? Maybe package it as a way to enrich your marriage, rather than as a way to solve problems?",
                "username": "spontaneous_owl"
            },
            {
                "comment": "The thought of doing that kinda kills me. I think what I really want is to get out. I am only 34 years old, and I see my life stretching out before me as an unbroken line of misery, until I wake up one day, and I am actually lying in bed beside my mother-in-law, the transformation complete.",
                "username": "spontaneous_owl"
            },
            {
                "comment": "I am curious about your father-in-law. Is he still around?",
                "username": "jubilant_giraffe"
            },
            {
                "comment": "No, the lucky mook dropped dead of a heart attack at 50. Now I know why. He probably ended up marrying his mother-in-law, and death was the best answer.",
                "username": "wandering_hedgehog"
            },
            {
                "comment": "It sounds to me as though you've made up your mind and just want to bring the issue here to get affirmation about a decision you've made to seek divorce. Divorce is a big step, which often brings as much trouble as it resolves. Think carefully and take the advice of family and friends. I do think, however hard it might be, that you owe it to yourself and your wife to try to raise the issue in discussion. Maybe she is unaware of how much she is like her mother, or of how much it upsets you. Either way, good luck!",
                "username": "eccentric_owl"
            }
        ]
    },
    {
        "conversationTitle": "Over-affectionate Boss",
        "conversationText": "28 year old single lady here being made self-conscious and the butt of co-worker jokes by the added attention her boss pays her.",
        "username": "jubilant_giraffe",
        "is_closed": false,
        "expertise": "personal",
        "comments": [
            {
                "comment": "Sexual harassment in the workplace is a serious issue, and there are usually well-defined policies in place to deal with it. Is your boss' attention unwanted? Is it making you feel threatened or intimidated in any way? Is the extra attention disrupting your relationship with the other workers? Is it impacting your personal life outside of work?",
                "username": "majestic_owl"
            },
            {
                "comment": "I don't feel intimated or in danger -- a little flattered, I guess. I'm not used to getting the attention from an older man in a position of authority. Our office is a 'hamster farm' cubicle set up where 12 people work. The boss checks in with each of us over the course of the day, but my co-workers have been remarking that he calls around to review my work more often than anyone else's. I actually think it's true. I think he's attracted to me. The joking from the others is maybe a little annoying, but that's all. The truth is, it does affect me outside of the office, because I'm paying more attention to what I wear and how I look. I spend a bit more time getting ready for work, since I know he's paying attention to me.",
                "username": "jubilant_giraffe"
            },
            {
                "comment": "I see. Nevertheless, something made you contact us here today. Are you able to say what that is?",
                "username": "majestic_owl"
            },
            {
                "comment": "Ok. What I'm worried about is, I like my job and I don't want to do anything to screw it up. I like my boss, and I like it that he finds me attractive in some way. I wouldn't actually mind if he were to ask me out or something. But I know that dating employees is against the rules in lots of places, and what if he says he wants to have a relationship with me but that means I can't work there anymore, or what if he makes a move and I turn him down, will he be hard on me?",
                "username": "jubilant_giraffe"
            },
            {
                "comment": "I can understand why you would be worried. That sounds like a difficult situation. On the one hand, you are enjoying the attention from someone who appeals to you, but on the other hand, those attentions might have consequences which are not favourable. Do you have a human resources department in your place of work, and someone you can talk to there?",
                "username": "majestic_owl"
            },
            {
                "comment": "Yes, there is an HR person, but I don't want to report my boss and get him in trouble. He's a nice guy and I like him a lot. And if HR puts heat on him and he figures out the complaint came from me, things could get really unpleasant. I just don't know what to do.",
                "username": "jubilant_giraffe"
            },
            {
                "comment": "Do you have a relationship outside of the office with someone? Are you married, or engaged, or do you have a significant other? If so, letting your boss know that in an offhand way might be a way to get him to back his attentions off.",
                "username": "agnostic_elephant"
            },
            {
                "comment": "Don't go to HR, at least not as an initial strategy. Try the direct approach. Tell him his attentions are making you a cause of comment and you would like them to stop, not because he has done anything report-worthy (though you might mention that in speaking with friends about this, they recommended you go to HR), but because you are worried about what might happen in the various scenarios you described. Just be honest. See how he takes it. HR is still a card you can play later on if he doesn't respect your words.",
                "username": "eccentric_owl"
            },
            {
                "comment": "No, I don't actually have a relationship, or even many friends outside of work, which is why it's good to talk this through here. Everyone else in my life is in some way involved in the situation.",
                "username": "jubilant_giraffe"
            },
            {
                "comment": "OK, well, here's an unconventional solution. Seeing as how you want to keep your current position at work, and how this situation with your boss might endanger that, may I suggest that you 'invent' a significant other, someone whose photo you can put on your desk, or who can give you some flowers or other sign of affection, and when your boss takes notice of them, you can say they are from this person with whom you are in a relationship. That might make him back off. If he increases the pressure, I'm thinking a meeting with HR might be in order.",
                "username": "agnostic_elephant"
            },
            {
                "comment": "That's a funny idea! I might try it just for laughs to see what happens. Can't hurt! Thanks.",
                "username": "jubilant_giraffe"
            },
            {
                "comment": "Actually I think it can hurt because it brings deception into your relationship with those you say are your closest friends (your co-workers). If you try this, at least let your co-workers in on the fiction and why you are doing it. It will help you lead an honest life and maybe stop their teasing as they will see that this is a situation you are not trying to encourage.",
                "username": "agnostic_elephant"
            },
            {
                "comment": "The reason workplaces have sexual harassment policies is because there is always a power imbalance between a boss and an employee. It would be worth knowing if he makes a habit of pursuing women among those he supervises, and how any others felt it has played out for them over the long run.  Ask around.",
                "username": "majestic_owl"
            }
        ]
    },
    {
        "conversationTitle": "Partner's Substance Use",
        "conversationText": "My partner (a lawyer) used to only party at weekends (cocaine) but lately I worry he is becoming too dependent on it (a bump to start the day or to get through client meetings he's dreading). What can I do?",
        "username": "quirky monkey",
        "is_closed": false,
        "expertise": "personal",
        "comments": [
            {
                "comment": "The fact your partner's escalating substance use has brought you here as a matter of concern, tells me that there is a problem, even though he will likely be resistant to seeing it as such if you confront him, denial being part of the illness that is addiction. I recommend you find an Nar-Anon meeting for yourself. It would be great if he would also go to an NA meeting, but at least start by going to Nar Anon yourself. You will meet lots of people there who are very familiar with the patterns of addiction. Ask them when they knew their family members had crossed the line between recreational use and abuse/dependency.  See if it sounds familiar.",
                "username": "confident_owl"
            },
            {
                "comment": "I can see my partner getting very upset with me for going to such a meeting. He would be afraid I would meet someone where I knew and that his professional reputation would be damaged.",
                "username": "quirky monkey"
            },
            {
                "comment": "I second confident_owl's advice about seeking out a Nar Anon meeting, whatever you need to do to make that happen -- drive an hour so you're in a town where you're not known or whatever.",
                "username": "handsome_owl"
            },
            {
                "comment": "If your partner is afraid of damage to his professional reputation, he should consider how much he has to lose by letting a problem which is getting out of hand go unchecked. If he is not afraid enough of losing or causing pain to you, make him see that he will lose respect among those in his profession. And that those who seek help when needed actually earn the respect of colleagues and friends.",
                "username": "tactile_turtle"
            },
            {
                "comment": "Cocaine addiction leads to ruin on so many fronts: health, family, finances, career...  But there are also lots of people out there who engage recovery -- I bet even some among your partner's colleagues.  There should be no stigma. But you have to shine a light on this if you are to help him. Do not enable him by keeping his behaviour in the dark.  He is putting you as well as himself at risk and if the time comes, be prepared to walk away. Cocaine will replace the higher part of the brain of the guy you fell in love with, with crocodile-brain. He will hurt his nearest and dearest to get what he needs.",
                "username": "apposite_armadillo"
            }
        ]
    },
    {
        "conversationTitle": "Planning for retirement",
        "conversationText": "I just turned 45 and I remember dreaming about retiring at 55 when I was younger. I'm wondering what financial steps I can take in the next 10 years to provide enough security to retire early.",
        "username": "mindful_gorilla",
        "is_closed": false,
        "expertise": "financial",
        "comments": [
            {
                "comment": "Many people think that early retirement is a life-option only available to baby-boomers, but with a good strategy, even 10 years can make a big difference in your net worth. You may not be comfortable sharing in this public forum details about your assets, but it is rather difficult to give advice without knowing more about your specific situation (ie. whether you own a home, have RRSPs/TFSA, will have retirement pension from work, whether you have debt, what your current income and net worth are etc.  Consider opening a private conversation where someone can go through all of this with you.",
                "username": "confident_owl"
            },
            {
                "comment": "I don't mind saying that I do own my own home free and clear, income is about 70K a year and I currently carry about 20K of debt.",
                "username": "mindful_gorilla"
            },
            {
                "comment": "Okay, don't give any more details in the public forum, but it's good that we're discussing this here because many of the strategies are the same for people in the same boat as you. I'm going to just give some very general advice and would still refer people to a private conversation if they want more detailed guidance. 1. There is good debt and bad debt. If you have that 20K on credit cards, pay it off!  If you have it on a home equity line of credit or have borrowed to invest, those can be good reasons to carry debt. 2. Pay yourself first. With a 70K/year job there is no reason why you should not be contributing the maximums to an RRSP and TSFA. If you have contribution room you have not used. Use it now.",
                "username": "kindly_owl"
            },
            {
                "comment": "3. Since you own your own home you have an asset, which is a bigger factor in separating those who can leverage what they have to make more wealth and those who are not in a position to do so. Have you considered renting space in your home, doing AirBnB, hosting international students etc. These sidelines are mostly passive income and you can continue with them even after retirement to supplement your income 4. Consider living abroad in retirement or doing a few years of work in a place like UAE. A person who can afford to retire only at 65 if they live in Canada might be able to retire 10 years earlier if they are prepared to live in Belize -- worth considering!",
                "username": "kindly_owl"
            },
            {
                "comment": "5. Invest in blue chip dividend paying stock. This is an income generating approach to investing rather than 'playing the market'. It carries some risk, but dividends are a wonderful source of passive income, and wise market investing is something you can continue long after 55 (when you're retired). 6. Curtail expenses. Are you wasting money? Living in a more extravagant home than you need, driving a more extravagant car, paying for subscriptions you don't use, paying for a lot of daily and needless luxuries. You'd be surprised how much you can save if you make thriftier decisions day-to-day. It comes down to your priorities. If you like the lifestyle perks in your life now you may not be able to retire early. If you deny yourself now, you might be able to live your retirement dream in 10 years' time. 7. Are there opportunities to increase your income at work? Receive bonuses, work overtime. Investigate your pension thoroughly.",
                "username": "kindly_owl"
            },
            {
                "comment": "Finally, 8. Speak to an accountant about how to minimize your tax liability. Canadians pay on average 38% of their income back to the government in tax. But there are lots of things you can do to lower this amount: RRSPs and TFSAs, charitable donations, borrowing to invest, tax credits and tax free incentives, maintaining a home office, receiving most of your investment income in dividends, having kids (at 45 it's not too late!), move province....  Good luck and happy trails.",
                "username": "kindly_owl"
            },
            {
                "comment": "Wow, kindly_owl_ that's some great advice! I'll be interested to read the responses from others to see if they've implemented any of these strategies and how they've seen their wealth grow.",
                "username": "mindful_gorilla"
            },
            {
                "comment": "I've been dividend investing for 10 years now. It's mostly been great. Occasionally I've bought a dog that offered a great high return only to cut it and have my book value reduce to waste paper on the stock itself. That can happen, but if you're prepared to win some and lose some, there'll probably be a net gain for you at the end of the day.",
                "username": "charming_penguin"
            },
            {
                "comment": "Retiring abroad sounds great, but look into it thoroughly, especially the health-care.", 
                "username": "compassionate_panda"
            },
            {
                "comment": "You're lucky to be in the position you are at 45. Some people just don't have the option to invest because there's nothing left after the bills are paid. And yes you can retire early if you deny yourself now, but you can also understand why a lot of our generation are living their best life now. They've seen their parents only scrimp and save and promise themselves they would start traveling in retirement only to drop dead a month after they got the gold watch.",
                "username": "adipose_lion" 
            },
            {
                "comment": "'Have kids' LOL. Does kindly_owl realize it costs $220 000 to raise a kid in Canada till it's 18?  And who's done raising a kid at 18 these days? You might be in the nursing home when they come to tell you they've got their first 'real job', only you won't be able to afford the nursing home, because it'll be 2050 and it'll cost you 20K a month to stay in one of those places!",
                "username": "decisive_dolphin"
            }
        ]
    },
    {
        "conversationTitle": "Religion and Work",
        "conversationText": "Arguments about religion are making my workplace a toxic environment",
        "username": "adipose_lion",
        "is_closed": false,
        "expertise": "career",
        "comments": [
            {
                "comment": "Can you say describe your work situation and say a bit more about the problem?",
                "username": "bashful_owl" 
            },
            {
                "comment": "Well, it's a product development centre. Our unit has sixteen people. We usually work in groups of four that rotate, to make sure the ideas and product generation remains fresh. Over the past couple of years we've hired a bunch of people from differing religious backgrounds. We've always had protestants and catholics, and people who don't hold to any formal religion, a few Jewish guys and gals. In most cases, you wouldn't know who was what, until there was some kind of holiday, and nobody cared. Now we have Muslims, Buddhists, Sikhs and Hindus, and a woman who says she's a witch, and some African folks who are Pentecostals. Anyway, now we got trouble. Why can't people keep their religion to themselves and out of the workplace?",
                "username": "adipose_lion"
            },
            {
                "comment": "Sounds like a wonderfully diverse workforce. What's been happening that's upsetting you?",
                "username": "spontaneous_owl"
            },
            {
                "comment": "Oh, man, things blew up big-time! Thanks to the current unhappy world situation, the Muslims won't work with the Jews, the Sikhs and Hindus have some kind of tension, the Pentecostals are trying to save everybody and one of them tried an exorcism on the witch! (She took it to HR!). Aren't there workplace laws which make it impossible for this kind of thing?",
                "username": "adipose_lion"
            },
            {
                "comment": "There are, particularly in Quebec, but not so much in Ontario. It sounds as though what worked well in the past is not as effective anymore. I take it there is tension when the groups are switched up?",
                "username": "charming_penguin"
            },
            {
                "comment": "Tension is right. When it is switching time, there is a coloured sticky note on our desk, and everyone with that same colour gets together as a group. In the past, there has been some wheeling and dealing, but lately things have gotten out of hand. Management has threatened to sack the lot of us if we 'don't grow up and get along,' in their words. I have to agree, as it is quite disturbing watching the witch and the Africans hissing at each other from across the table.", 
                "username": "adipose_lion"
            },
            {
                "comment": "It sounds like all 16 of you need to sit down with someone to moderate the conversation and talk about how to change the dynamics",
                "username": "compassionate_panda" 
            },
            {
                "comment": "That would be my thought as well, compassionate_panda. HR has a role to play here in facilitating a discussion amongst all of you as a group. Has that been tried?",
                "username": "bashful_owl"
            },
            {
                "comment": "I actually put in a request for something like that, but the HR person is a complete idiot, who thinks she's just there to deal with gender issues, which is the one problem we don't have. Then actually sent in a resource person to talk about 'unconscious bias' -- our biases are very conscious! Every issue breaks down predictably, Muslim vs. Jew, Sikh vs. Hindu, Pentecostals vs. pagan.",
                "username": "adipose_lion" 
            },
            {
                "comment": "It would be interesting to see you guys play the line game. It can be eye-opening in contexts that have become deeply sectarian to understand that people on the other side of the line meet around tastes in music, certain values that are not religion-specific etc.",
                "username": "copacetic_kangaroo"
            },
            {
                "comment": "Addressing any effort at mediation toward all sixteen of you at a time might be a bit much. How about you start with your group of four -- try to hammer out an agreement of work-share in such a way as to make the workday a 'creed-free zone' for the sake of doing the job.",
                "username": "spontaneous_owl"
            },
            {
                "comment": "Yeah, whenever I try to talk sense, they tell me it is easy for me, as I don't believe anything, so why listen to what I have to say? I can put up with this indefinitely, as it is occasionally entertaining. I just hope it doesn't turn any uglier. And I hope we don't all get fired.",
                "username": "adipose_lion" 
            },
            {
                "comment": "It can be difficult from a non-religious perspective to understand the store that others place in their religion. It is meaningful to people because it deals with ultimate things -- ultimate commitments. Devotion means being devoted to what you hold sacred with all your heart and soul and strength and mind, so it is difficult when people differ about to what or to whom that devotion should be directed. But all religions define not only a code of devotion to the deity (or in the case of Theravada Buddhists the laws that govern life) but also a code of ethics governing treatment of others.  So perhaps the solution doesn't lie in everyone becoming less religious, but in those who are identifying with a religion being challenged with what their religions actually say about treatment of the others. Remind the muslims that there is no compulsion in religion (Qu'ran 2.256). Remind the Pentecostals of Romans 12: 17-21 which talks about living peaceably with all and leaving judgment to God.",
                "username": "bashful_owl"
            },
            {
                "comment": "I agree with that, bashful_owl! I was always taught as a kid that it was not polite to mention politics or religion at the dinner table, but that policy has left us with an inability to talk about either. Instead of silencing us on certain topics I think our parents should have taught us how to have such conversations, civilly. It all begins with respect and being able to treat someone else with the consideration you'd like to be treated with yourself -- and that's a principle enshrined in all the religions.",
                "username": "copacetic_kangaroo" 
            },
            {
                "comment": "I think what your team needs is a common enemy! I'm sort of kidding, but not entirely!",
                "username": "mindful_gorilla"
            } 
        ]
    },
    {
        "conversationTitle": "Craving more space",
        "conversationText": "My girlfriend got a job in my office. Now there's no escape.",
        "username": "decisive_dolphin",
        "is_closed": false,
        "expertise": "personal",
        "comments": [
            {
                "comment": "Can you give us a bit more background?",
                "username": "gifted_owl"
            },
            {
                "comment": "My girlfriend -- we've been together for two years -- lost her job. We had an opening in my office, and I had mentioned it in passing, and to my surprise she applied for the job and got it. She didn't say anything at the interview about her relationship with me. So now we work in the same place. She is a reception coordinator, and she can see my cubicle and desk from hers. It's driving me crazy. I feel trapped. Like I can't breathe.",
                "username": "decisive_dolphin"
            },
            {
                "comment": "Can you tell me more about why this is so distressing for you?",
                "username": "gifted_owl"
            },
            {
                "comment": "Like I say, we've been together for two years, and living together for one. Up till now, I guess I didn't realize how I have two lives -- my work life and my life with her. I guess I needed those two lives to be separate. People say you shouldn't take work home, but now I take home to work -- there's no break. If I chat with the guy in the next cubicle, she asks me what I was talking about. I can never go to lunch with the others who work there. She kind of keeps an eye on me all day. If I so much as stretch, she asks if I'm OK. If I go to the bathroom, she asks what took so long. And when we go home, all she talks about is work -- this person bugs her, how can I like that person, etc.",
                "username": "decisive_dolphin"
            },
            {
                "comment": "I can hear that you're feeling claustrophobic. Have you tried talking to her about this?",
                "username": "gifted_owl"
            },
            {
                "comment": "Like how? ' Hey, babe, spending all that time with you makes me crazy. I'm beginning to hate the sight of you. Can't you get a different job?", 
                "username": "decisive_dolphin"
            },
            {
                "comment": "That might not be the best wording to use, but I think it would be fair to talk about how you are finding it difficult to separate your work life and your home life.",
                "username": "gifted_owl" 
            },
            {
                "comment": "She'll burst into tears and say that I hate her. And how she loves this job and I don't want anything nice for her. And so on. And I've actually thought about breaking up with her, or at the very least moving out, but then I'd have her 20 feet away from me all day giving me the stink-eye.",
                "username": "decisive_dolphin"
            },
            {
                "comment": "What about you? Do you have flexibility in your workplace? Can you transfer to another department perhaps? Just so you are not in one another's sight-line all day?",
                "username": "organized_eagle" 
            },
            {
                "comment": "Look, I've got a good job, great colleagues, and it has taken me some time to get where I am in the company. Why should I have to screw that up for her?.",
                "username": "decisive_dolphin"
            },
            {
                "comment": "It sounds to me like you are at the end of your rope with this. You seem to have established a dynamic between you where you try to protect some space of your own and she becomes all the more desperately clingy because she feels you pulling away from her. Is this why she has pursued you even to work? I think you need to be up-front with her and acknowledge that you have very different notions of couple-closeness (there are studies into family of origin that say we inherit expectations about connectedness and flexibility from our childhood home). Somehow you have to both declare and express in action your commitment to her and to your relationship, because her insecurity around that is what drives her pursuit, but at the same time you need to eke out the space you need and tell her explicitly that that is what you are doing. Encourage those interests that widen her social circle and field of outside interests beyond just you.",
                "username": "kindly_owl" 
            },
            {
                "comment": "She sounds crazy-snakes. I would cut your losses man!",
                "username": "estranged_octopus"
            }, 
            {
                "comment": "Or maybe just marry her already and have a kid. It'll divide her focus and take the pressure off of you! I hope your company provides a looooong mat-leave!",
                "username": "agnostic_elephant" 
            },
            {
                "comment": "I hear the last two comments as belittling to all women, even if there may be something in the last one. The fact decisive_dolphin has been so very indecisive about marriage and moving the relationship on, may be contributing to the dynamic. Is he in fact a commitment-phobe who likes all the perks of being in a relationship, but who wants his space too?",
                "username": "estranged_octopus"
            },
            {
                "comment": "This exchange is getting a little heated. Let's take some 'space' from it ourselves and pause to consider our words.",
                "username": "gifted_owl"
            }
        ]
    }
],
currentConversations: null,
isLoggedIn: false,
isLoading: false,
error: null, 
};

// Create the context
const AppContext = createContext();
// Extract the Provider component from the context
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  // Use the reducer hook to manage state
  const [state, dispatch] = useReducer(reducer, initialState); 

return <Provider value={{state, dispatch}}>{children}</Provider>;
};

// Custom hook to use the context
const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, useAppContext };
