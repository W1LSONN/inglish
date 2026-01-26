const VERB_SENTENCES = {
    "Be (am/is/are)": {
        infinitive: {
            positive: ["I want to <b>be</b> a doctor.", "You need to <b>be</b> careful.", "Try to <b>be</b> nice."],
            negative: ["I don't want to <b>be</b> late.", "Don't <b>be</b> afraid.", "He doesn't want to <b>be</b> alone."],
            question: ["Do you want to <b>be</b> happy?", "Will you <b>be</b> my friend?", "Can you <b>be</b> quiet?"]
        },
        past: {
            positive: ["She <b>was</b> at the party.", "We <b>were</b> happy yesterday.", "I <b>was</b> tired last night."],
            negative: ["She <b>wasn't</b> at the party.", "We <b>weren't</b> ready.", "It <b>wasn't</b> true."],
            question: ["<b>Was</b> she at the party?", "<b>Were</b> they home?", "<b>Was</b> it cold?"]
        },
        participle: {
            positive: ["They have <b>been</b> friends for years.", "I have <b>been</b> to Spain.", "She has <b>been</b> busy."],
            negative: ["They haven't <b>been</b> friends since the fight.", "I haven't <b>been</b> there yet.", "It hasn't <b>been</b> easy."],
            question: ["Have they <b>been</b> friends long?", "Have you ever <b>been</b> in love?", "Has she <b>been</b> sick?"]
        },
        future: {
            positive: ["He will <b>be</b> here soon.", "It will <b>be</b> fun.", "I will <b>be</b> ready."],
            negative: ["He won't <b>be</b> here soon.", "It won't <b>be</b> difficult.", "They won't <b>be</b> happy."],
            question: ["Will he <b>be</b> here soon?", "Will it <b>be</b> okay?", "When will you <b>be</b> back?"]
        }
    },
    "Become": {
        infinitive: {
            positive: ["He wants to <b>become</b> a teacher.", "Caterpillars <b>become</b> butterflies.", "Study hard to <b>become</b> smart."],
            negative: ["He doesn't want to <b>become</b> a lawyer.", "It won't <b>become</b> a problem.", "Don't <b>become</b> impatient."],
            question: ["Does he want to <b>become</b> a teacher?", "How do you <b>become</b> a member?", "When did you <b>become</b> interested?"]
        },
        past: {
            positive: ["She <b>became</b> famous overnight.", "The sky <b>became</b> dark.", "He <b>became</b> angry."],
            negative: ["She didn't <b>become</b> famous.", "It didn't <b>become</b> an issue.", "They never <b>became</b> friends."],
            question: ["Did she <b>become</b> famous?", "When did he <b>become</b> king?", "Why did it <b>become</b> so cold?"]
        },
        participle: {
            positive: ["They have <b>become</b> successful.", "It has <b>become</b> clear.", "She has <b>become</b> a strong leader."],
            negative: ["They haven't <b>become</b> successful yet.", "It hasn't <b>become</b> worse.", "He hasn't <b>become</b> properly trained."],
            question: ["Have they <b>become</b> successful?", "Has it <b>become</b> easier?", "What has <b>become</b> of him?"]
        },
        future: {
            positive: ["It will <b>become</b> clear soon.", "She will <b>become</b> a doctor.", "You will <b>become</b> used to it."],
            negative: ["It won't <b>become</b> clear immediately.", "He won't <b>become</b> a burden.", "This won't <b>become</b> a habit."],
            question: ["Will it <b>become</b> clear?", "Will she <b>become</b> the boss?", "What will <b>become</b> of us?"]
        }
    },
    "Begin": {
        infinitive: {
            positive: ["Let's <b>begin</b> the meeting.", "I want to <b>begin</b> a new hobby.", "Class will <b>begin</b> at 9."],
            negative: ["Don't <b>begin</b> without me.", "I can't <b>begin</b> to explain.", "Please do not <b>begin</b> yet."],
            question: ["When does the show <b>begin</b>?", "Shall we <b>begin</b>?", "Where does the story <b>begin</b>?"]
        },
        past: {
            positive: ["It <b>began</b> to rain.", "The game <b>began</b> an hour ago.", "She <b>began</b> to cry."],
            negative: ["It didn't <b>begin</b> on time.", "He didn't <b>begin</b> the work.", "The war never <b>began</b>."],
            question: ["When did it <b>begin</b>?", "Who <b>began</b> the fight?", "Why did you <b>begin</b> late?"]
        },
        participle: {
            positive: ["She has <b>begun</b> a new job.", "Winter has <b>begun</b>.", "They have <b>begun</b> construction."],
            negative: ["She hasn't <b>begun</b> yet.", "The show hasn't <b>begun</b>.", "We haven't <b>begun</b> eating."],
            question: ["Has she <b>begun</b> working?", "Has the movie <b>begun</b>?", "Have you <b>begun</b> your diet?"]
        },
        future: {
            positive: ["We will <b>begin</b> soon.", "The tour will <b>begin</b> here.", "It will <b>begin</b> shortly."],
            negative: ["We won't <b>begin</b> late.", "It won't <b>begin</b> until you arrive.", "The fun won't <b>begin</b> without you."],
            question: ["Will we <b>begin</b> now?", "When will it <b>begin</b>?", "Will you <b>begin</b> today?"]
        }
    },
    "Break": {
        infinitive: {
            positive: ["Be careful not to <b>break</b> it.", "I need to <b>break</b> the habit.", "Glass can <b>break</b> easily."],
            negative: ["I won't <b>break</b> my promise.", "Don't <b>break</b> the rules.", "Try not to <b>break</b> anything."],
            question: ["Did you <b>break</b> the glass?", "Can you <b>break</b> a dollar?", "Why did it <b>break</b>?"]
        },
        past: {
            positive: ["He <b>broke</b> his leg skiing.", "She <b>broke</b> the record.", "The machine <b>broke</b> down."],
            negative: ["He didn't <b>break</b> the rules.", "I didn't <b>break</b> it.", "It never <b>broke</b> before."],
            question: ["Who <b>broke</b> the window?", "How did you <b>break</b> your arm?", "What <b>broke</b>?"]
        },
        participle: {
            positive: ["The vase is <b>broken</b>.", "He has <b>broken</b> the law.", "My heart is <b>broken</b>."],
            negative: ["It hasn't <b>broken</b> completely.", "She hasn't <b>broken</b> her silence.", "They haven't <b>broken</b> up."],
            question: ["Is the lock <b>broken</b>?", "Have you <b>broken</b> a bone?", "Has the fever <b>broken</b>?"]
        },
        future: {
            positive: ["It will <b>break</b> if you drop it.", "She will <b>break</b> the news.", "The storm will <b>break</b> soon."],
            negative: ["It won't <b>break</b> easily.", "I won't <b>break</b> your trust.", "The rope won't <b>break</b>."],
            question: ["Will the chain <b>break</b>?", "Will it <b>break</b> under pressure?", "When will dawn <b>break</b>?"]
        }
    },
    "Bring": {
        infinitive: {
            positive: ["Please <b>bring</b> me a menu.", "Can you <b>bring</b> water?", "Remember to <b>bring</b> your ID."],
            negative: ["Don't <b>bring</b> any food.", "I didn't <b>bring</b> my wallet.", "You shouldn't <b>bring</b> a dog."],
            question: ["Can you <b>bring</b> a friend?", "What should I <b>bring</b>?", "Did you <b>bring</b> it?"]
        },
        past: {
            positive: ["She <b>brought</b> a cake.", "He <b>brought</b> bad news.", "They <b>brought</b> gifts."],
            negative: ["She didn't <b>bring</b> enough.", "I didn't <b>bring</b> an umbrella.", "He never <b>brought</b> it back."],
            question: ["What did you <b>bring</b>?", "Who <b>brought</b> this?", "Why did she <b>bring</b> him?"]
        },
        participle: {
            positive: ["I have <b>brought</b> the keys.", "She has <b>brought</b> joy.", "We have <b>brought</b> snacks."],
            negative: ["I haven't <b>brought</b> my car.", "They haven't <b>brought</b> the papers.", "He hasn't <b>brought</b> it up."],
            question: ["Have you <b>brought</b> wine?", "What have you <b>brought</b>?", "Has he <b>brought</b> the money?"]
        },
        future: {
            positive: ["I will <b>bring</b> it tomorrow.", "He will <b>bring</b> the car.", "They will <b>bring</b> help."],
            negative: ["I won't <b>bring</b> trouble.", "She won't <b>bring</b> the kids.", "It won't <b>bring</b> happiness."],
            question: ["Will you <b>bring</b> it?", "What will you <b>bring</b>?", "Will they <b>bring</b> dessert?"]
        }
    },
    "Build": {
        infinitive: {
            positive: ["They plan to <b>build</b> a house.", "We need to <b>build</b> trust.", "Let's <b>build</b> a fire."],
            negative: ["We cannot <b>build</b> here.", "Don't <b>build</b> your hopes up.", "They won't <b>build</b> a wall."],
            question: ["Where will you <b>build</b> it?", "Can you <b>build</b> this?", "How do you <b>build</b> muscle?"]
        },
        past: {
            positive: ["He <b>built</b> a robot.", "Romans <b>built</b> roads.", "She <b>built</b> a career."],
            negative: ["He didn't <b>build</b> the fence.", "They didn't <b>build</b> it clearly.", "Rome wasn't <b>built</b> in a day."],
            question: ["Who <b>built</b> this bridge?", "When did they <b>build</b> it?", "Why did he <b>build</b> that?"]
        },
        participle: {
            positive: ["They have <b>built</b> a strong team.", "He has <b>built</b> a fortune.", "We have <b>built</b> a model."],
            negative: ["They haven't <b>built</b> it yet.", "She hasn't <b>built</b> confidence.", "Nothing has been <b>built</b>."],
            question: ["Have they <b>built</b> the wall?", "Has he <b>built</b> a reputation?", "What have you <b>built</b>?"]
        },
        future: {
            positive: ["We will <b>build</b> a new school.", "It will <b>build</b> character.", "They will <b>build</b> faster."],
            negative: ["We won't <b>build</b> this year.", "He won't <b>build</b> it alone.", "It won't <b>build</b> itself."],
            question: ["Will they <b>build</b> a park?", "When will you <b>build</b>?", "What will you <b>build</b> next?"]
        }
    },
    "Buy": {
        infinitive: {
            positive: ["I need to <b>buy</b> groceries.", "Let's <b>buy</b> a gift.", "I want to <b>buy</b> a house."],
            negative: ["I don't want to <b>buy</b> it.", "Don't <b>buy</b> that one.", "We can't <b>buy</b> more."],
            question: ["What did you <b>buy</b>?", "Where can I <b>buy</b> tickets?", "Did you <b>buy</b> milk?"]
        },
        past: {
            positive: ["She <b>bought</b> a new dress.", "I <b>bought</b> a computer.", "They <b>bought</b> lunch."],
            negative: ["She didn't <b>buy</b> anything.", "He didn't <b>buy</b> the lie.", "We didn't <b>buy</b> tickets."],
            question: ["Where did she <b>buy</b> that?", "Who <b>bought</b> the drinks?", "Why did you <b>buy</b> it?"]
        },
        participle: {
            positive: ["We have <b>bought</b> tickets.", "He has <b>bought</b> milk.", "She has <b>bought</b> a car."],
            negative: ["We haven't <b>bought</b> them.", "I haven't <b>bought</b> it yet.", "They haven't <b>bought</b> in."],
            question: ["Have you <b>bought</b> the gift?", "Has she <b>bought</b> the house?", "What have they <b>bought</b>?"]
        },
        future: {
            positive: ["I will <b>buy</b> dinner.", "We will <b>buy</b> it later.", "She will <b>buy</b> a dress."],
            negative: ["I won't <b>buy</b> that car.", "He won't <b>buy</b> it.", "They won't <b>buy</b> anything."],
            question: ["Will you <b>buy</b> me a drink?", "What will you <b>buy</b>?", "When will you <b>buy</b> it?"]
        }
    },
    "Come": {
        infinitive: { positive: ["Please <b>come</b> in.", "You should <b>come</b> visit.", "Can you <b>come</b>?"], negative: ["Don't <b>come</b> closer.", "I can't <b>come</b> today.", "He won't <b>come</b>."], question: ["Can you <b>come</b> over?", "When will you <b>come</b>?", "Why did you <b>come</b>?"] },
        past: { positive: ["He <b>came</b> home late.", "She <b>came</b> to see me.", "It <b>came</b> true."], negative: ["He didn't <b>come</b> to the party.", "Nobody <b>came</b>.", "It didn't <b>come</b> in time."], question: ["Why did he <b>come</b>?", "Who <b>came</b> with you?", "When did they <b>come</b>?"] },
        participle: { positive: ["She has <b>come</b> a long way.", "Summer has <b>come</b>.", "They have <b>come</b> back."], negative: ["She hasn't <b>come</b> back.", "He hasn't <b>come</b> home.", "It hasn't <b>come</b> yet."], question: ["Has the mail <b>come</b>?", "Have they <b>come</b>?", "Has he <b>come</b> to visit?"] },
        future: { positive: ["Winter will <b>come</b> soon.", "He will <b>come</b> tomorrow.", "Dreams will <b>come</b> true."], negative: ["It won't <b>come</b> easy.", "She won't <b>come</b> alone.", "They won't <b>come</b> back."], question: ["Will she <b>come</b> tomorrow?", "When will it <b>come</b>?", "Will you <b>come</b>?"] }
    },
    "Cost": {
        infinitive: { positive: ["It may <b>cost</b> a lot.", "Quality doesn't have to <b>cost</b> more.", "Does it <b>cost</b> money?"], negative: ["It shouldn't <b>cost</b> much.", "It won't <b>cost</b> a penny.", "Dreams don't <b>cost</b> anything."], question: ["How much does it <b>cost</b>?", "Does it <b>cost</b> extra?", "What will it <b>cost</b>?"] },
        past: { positive: ["The car <b>cost</b> a fortune.", "It <b>cost</b> five dollars.", "The mistake <b>cost</b> him his job."], negative: ["It didn't <b>cost</b> a thing.", "The ticket didn't <b>cost</b> much.", "It <b>cost</b> nothing."], question: ["How much did it <b>cost</b>?", "Did it <b>cost</b> too much?", "What did it <b>cost</b>?"] },
        participle: { positive: ["It has <b>cost</b> us time.", "The war has <b>cost</b> many lives.", "It has <b>cost</b> a lot."], negative: ["It hasn't <b>cost</b> too much.", "It hasn't <b>cost</b> me anything.", "Victory hasn't <b>cost</b> enough."], question: ["Has it <b>cost</b> you dearly?", "How much has it <b>cost</b>?", "What has it <b>cost</b>?"] },
        future: { positive: ["It will <b>cost</b> $50.", "This will <b>cost</b> you.", "Repair will <b>cost</b> more."], negative: ["It won't <b>cost</b> extra.", "It won't <b>cost</b> a dime.", "Advice won't <b>cost</b> you."], question: ["Will it <b>cost</b> more?", "How much will it <b>cost</b>?", "Will it <b>cost</b> time?"] }
    },
    "Cut": {
        infinitive: { positive: ["I need to <b>cut</b> the paper.", "Can you <b>cut</b> the cake?", "Use knife to <b>cut</b>."], negative: ["Don't <b>cut</b> your finger.", "I cannot <b>cut</b> it.", "Do not <b>cut</b> in line."], question: ["Can you <b>cut</b> this?", "Will it <b>cut</b>?", "How do you <b>cut</b> it?"] },
        past: { positive: ["She <b>cut</b> her hair.", "He <b>cut</b> his hand.", "I <b>cut</b> the rope."], negative: ["She didn't <b>cut</b> the cake.", "He didn't <b>cut</b> himself.", "We didn't <b>cut</b> class."], question: ["Who <b>cut</b> the cheese?", "Did you <b>cut</b> yourself?", "Why did you <b>cut</b> it?"] },
        participle: { positive: ["I have <b>cut</b> relations.", "She has <b>cut</b> expenses.", "He has <b>cut</b> the line."], negative: ["I haven't <b>cut</b> it yet.", "We haven't <b>cut</b> costs.", "She hasn't <b>cut</b> loose."], question: ["Have you <b>cut</b> the grass?", "Has he <b>cut</b> his hair?", "Have they <b>cut</b> funding?"] },
        future: { positive: ["Only one will <b>cut</b> it.", "I will <b>cut</b> it later.", "He will <b>cut</b> the ribbon."], negative: ["This won't <b>cut</b> it.", "I won't <b>cut</b> my hair.", "She won't <b>cut</b> corners."], question: ["Will he <b>cut</b> the wire?", "Will you <b>cut</b> it out?", "When will you <b>cut</b> it?"] }
    },
    "Choose": {
        infinitive: { positive: ["You must <b>choose</b> a side.", "I have to <b>choose</b> one.", "Help me <b>choose</b>."], negative: ["I cannot <b>choose</b> for you.", "Don't <b>choose</b> the wrong one.", "I didn't <b>choose</b> this."], question: ["Which one will you <b>choose</b>?", "Did you <b>choose</b>?", "How do I <b>choose</b>?"] },
        past: { positive: ["He <b>chose</b> the red one.", "She <b>chose</b> to stay.", "We <b>chose</b> him."], negative: ["He didn't <b>choose</b> wisely.", "I didn't <b>choose</b> that.", "They didn't <b>choose</b> me."], question: ["Why did you <b>choose</b> that?", "Who <b>chose</b> this?", "When did she <b>choose</b>?"] },
        participle: { positive: ["They have <b>chosen</b> a leader.", "I have <b>chosen</b> my path.", "She has <b>chosen</b> well."], negative: ["They haven't <b>chosen</b> yet.", "We haven't <b>chosen</b> a name.", "He hasn't <b>chosen</b>."], question: ["Have you <b>chosen</b>?", "Who was <b>chosen</b>?", "Has she <b>chosen</b> a dress?"] },
        future: { positive: ["I will <b>choose</b> the best.", "She will <b>choose</b> soon.", "They will <b>choose</b> you."], negative: ["I won't <b>choose</b> him.", "We won't <b>choose</b> sides.", "He won't <b>choose</b>."], question: ["Will she <b>choose</b> me?", "Who will you <b>choose</b>?", "When will they <b>choose</b>?"] }
    },
    "Do": {
        infinitive: { positive: ["I want to <b>do</b> my best.", "Let's <b>do</b> this.", "I have work to <b>do</b>."], negative: ["I don't want to <b>do</b> it.", "Don't <b>do</b> that.", "We can't <b>do</b> anything."], question: ["What do you want to <b>do</b>?", "Can you <b>do</b> me a favor?", "How do you <b>do</b>?"] },
        past: { positive: ["She <b>did</b> her homework.", "I <b>did</b> the dishes.", "He <b>did</b> a great job."], negative: ["She didn't <b>do</b> the dishes.", "I didn't <b>do</b> it.", "They didn't <b>do</b> well."], question: ["How did you <b>do</b> that?", "What did he <b>do</b>?", "Did you <b>do</b> your part?"] },
        participle: { positive: ["We have <b>done</b> it all.", "She has <b>done</b> enough.", "It is <b>done</b>."], negative: ["We haven't <b>done</b> enough.", "I haven't <b>done</b> my best.", "Nothing has been <b>done</b>."], question: ["Have you <b>done</b> your job?", "What have they <b>done</b>?", "Has she <b>done</b> it?"] },
        future: { positive: ["He will <b>do</b> it later.", "I will <b>do</b> my homework.", "We will <b>do</b> better."], negative: ["He won't <b>do</b> that.", "I won't <b>do</b> it again.", "They won't <b>do</b> business."], question: ["Will you <b>do</b> me a favor?", "What will you <b>do</b>?", "Will it <b>do</b>?"] }
    },
    "Draw": {
        infinitive: { positive: ["I love to <b>draw</b> animals.", "Can you <b>draw</b> this?", "I want to <b>draw</b>."], negative: ["I can't <b>draw</b> well.", "Don't <b>draw</b> on the wall.", "He doesn't <b>draw</b>."], question: ["Can you <b>draw</b> this?", "Do you like to <b>draw</b>?", "What do you <b>draw</b>?"] },
        past: { positive: ["He <b>drew</b> a map.", "She <b>drew</b> a picture.", "I <b>drew</b> a circle."], negative: ["He didn't <b>draw</b> anything.", "I didn't <b>draw</b> well.", "She didn't <b>draw</b> it."], question: ["Who <b>drew</b> this picture?", "What did you <b>draw</b>?", "When did he <b>draw</b> this?"] },
        participle: { positive: ["She has <b>drawn</b> a crowd.", "I have <b>drawn</b> a blank.", "He has <b>drawn</b> plans."], negative: ["She hasn't <b>drawn</b> in years.", "They haven't <b>drawn</b> conclusions.", "I haven't <b>drawn</b> it."], question: ["Have you <b>drawn</b> the line?", "Has she <b>drawn</b> before?", "What have you <b>drawn</b>?"] },
        future: { positive: ["I will <b>draw</b> a conclusion.", "He will <b>draw</b> a card.", "She will <b>draw</b> you."], negative: ["I won't <b>draw</b> blood.", "He won't <b>draw</b> attention.", "We won't <b>draw</b>."], question: ["Will you <b>draw</b> a card?", "What will you <b>draw</b>?", "Will he <b>draw</b> it?"] }
    },
    "Drink": {
        infinitive: { positive: ["You must <b>drink</b> water.", "I want to <b>drink</b> coffee.", "Let's <b>drink</b> to that."], negative: ["Don't <b>drink</b> and drive.", "I don't <b>drink</b> alcohol.", "She doesn't <b>drink</b> soda."], question: ["What do you want to <b>drink</b>?", "Can we <b>drink</b> here?", "Do you <b>drink</b> tea?"] },
        past: { positive: ["She <b>drank</b> some tea.", "He <b>drank</b> a whole bottle.", "We <b>drank</b> wine."], negative: ["She didn't <b>drink</b> soda.", "He didn't <b>drink</b> much.", "I didn't <b>drink</b> the water."], question: ["Who <b>drank</b> my milk?", "What did you <b>drink</b>?", "Why did he <b>drink</b> that?"] },
        participle: { positive: ["He has <b>drunk</b> too much.", "I have <b>drunk</b> enough.", "She has <b>drunk</b> the juice."], negative: ["He hasn't <b>drunk</b> coffee.", "We haven't <b>drunk</b> yet during the trip.", "They haven't <b>drunk</b> anything."], question: ["Have you <b>drunk</b> enough?", "Has he <b>drunk</b> all of it?", "Have they <b>drunk</b> the wine?"] },
        future: { positive: ["I will <b>drink</b> with you.", "We will <b>drink</b> champagne.", "He will <b>drink</b> slowly."], negative: ["I won't <b>drink</b> that.", "She won't <b>drink</b> tonight.", "They won't <b>drink</b> here."], question: ["Will you <b>drink</b> this?", "What will you <b>drink</b>?", "Will they <b>drink</b> punch?"] }
    },
    "Drive": {
        infinitive: { positive: ["I want to <b>drive</b> a fast car.", "Can you <b>drive</b> the truck?", "It's safe to <b>drive</b>."], negative: ["I don't know how to <b>drive</b>.", "Don't <b>drive</b> tired.", "He can't <b>drive</b> stick."], question: ["Can you <b>drive</b> manual?", "Do you <b>drive</b> often?", "Will you <b>drive</b>?"] },
        past: { positive: ["We <b>drove</b> all night.", "She <b>drove</b> home safely.", "He <b>drove</b> a taxi."], negative: ["We didn't <b>drive</b> fast.", "I didn't <b>drive</b> there.", "He didn't <b>drive</b> the bus."], question: ["Where did you <b>drive</b>?", "Who <b>drove</b> the car?", "Why did you <b>drive</b> so far?"] },
        participle: { positive: ["I have <b>driven</b> this truck.", "She has <b>driven</b> miles.", "We have <b>driven</b> past it."], negative: ["I haven't <b>driven</b> before.", "He hasn't <b>driven</b> in snow.", "They haven't <b>driven</b> a van."], question: ["Have you ever <b>driven</b>?", "Has she <b>driven</b> this?", "Who has <b>driven</b> my car?"] },
        future: { positive: ["He will <b>drive</b> us there.", "I will <b>drive</b> next.", "They will <b>drive</b> carefully."], negative: ["He won't <b>drive</b> safely.", "I won't <b>drive</b> at night.", "She won't <b>drive</b> that car."], question: ["Will you <b>drive</b> me home?", "Who will <b>drive</b>?", "When will we <b>drive</b> back?"] }
    },
    "Eat": {
        infinitive: { positive: ["It's time to <b>eat</b>.", "I love to <b>eat</b> pizza.", "We must <b>eat</b>."], negative: ["Don't <b>eat</b> too fast.", "I can't <b>eat</b> this.", "He doesn't <b>eat</b> meat."], question: ["What did you <b>eat</b>?", "When do we <b>eat</b>?", "Do you want to <b>eat</b>?"] },
        past: { positive: ["I <b>ate</b> a burger.", "We <b>ate</b> dinner late.", "She <b>ate</b> it all."], negative: ["I didn't <b>eat</b> lunch.", "He didn't <b>eat</b> his veggies.", "They didn't <b>eat</b> home."], question: ["Who <b>ate</b> the cake?", "What did you <b>eat</b>?", "Why did she <b>eat</b> that?"] },
        participle: { positive: ["She has <b>eaten</b> already.", "We have <b>eaten</b> too much.", "I have <b>eaten</b> there."], negative: ["She hasn't <b>eaten</b> yet.", "I haven't <b>eaten</b> all day.", "They haven't <b>eaten</b> breakfast."], question: ["Have you <b>eaten</b>?", "Has everyone <b>eaten</b>?", "What have you <b>eaten</b>?"] },
        future: { positive: ["We will <b>eat</b> at 6.", "I will <b>eat</b> spicy food.", "They will <b>eat</b> happily."], negative: ["We won't <b>eat</b> out.", "I won't <b>eat</b> sugar.", "He won't <b>eat</b> fish."], question: ["Will you <b>eat</b> your veggies?", "Where will we <b>eat</b>?", "What will they <b>eat</b>?"] }
    },
    "Fall": {
        infinitive: { positive: ["Leaves <b>fall</b> in autumn.", "Try not to <b>fall</b>.", "Prices might <b>fall</b>."], negative: ["Don't <b>fall</b> asleep.", "He won't <b>fall</b> for it.", "I won't <b>fall</b> behind."], question: ["Did you <b>fall</b>?", "Will the rain <b>fall</b>?", "Why do leaves <b>fall</b>?"] },
        past: { positive: ["He <b>fell</b> down stairs.", "She <b>fell</b> in love.", "It <b>fell</b> off the shelf."], negative: ["He didn't <b>fall</b> hard.", "I didn't <b>fall</b> recently.", "We didn't <b>fall</b> for the trick."], question: ["Where did he <b>fall</b>?", "Did she <b>fall</b>?", "What <b>fell</b>?"] },
        participle: { positive: ["Prices have <b>fallen</b>.", "She has <b>fallen</b> asleep.", "Snow has <b>fallen</b>."], negative: ["She hasn't <b>fallen</b> ill.", "Leaves haven't <b>fallen</b> yet.", "I haven't <b>fallen</b>."], question: ["Have you <b>fallen</b> in love?", "Has he <b>fallen</b> down?", "Has the price <b>fallen</b>?"] },
        future: { positive: ["Night will <b>fall</b> soon.", "Rain will <b>fall</b> later.", "He will <b>fall</b>."], negative: ["You won't <b>fall</b>.", "It won't <b>fall</b> apart.", "She won't <b>fall</b> sick."], question: ["Will the rain <b>fall</b>?", "When will night <b>fall</b>?", "Where will it <b>fall</b>?"] }
    },
    "Feel": {
        infinitive: { positive: ["I want to <b>feel</b> better.", "You will <b>feel</b> it.", "Can you <b>feel</b> the rhythm?"], negative: ["I don't <b>feel</b> good.", "She doesn't <b>feel</b> right.", "Don't <b>feel</b> bad."], question: ["How do you <b>feel</b>?", "Do you <b>feel</b> sick?", "Can we <b>feel</b> this?"] },
        past: { positive: ["She <b>felt</b> cold.", "I <b>felt</b> happy.", "We <b>felt</b> a quake."], negative: ["She didn't <b>feel</b> pain.", "I didn't <b>feel</b> sorry.", "He didn't <b>feel</b> like going."], question: ["Did you <b>feel</b> that?", "How did she <b>feel</b>?", "Who <b>felt</b> it?"] },
        participle: { positive: ["I have <b>felt</b> this before.", "She has <b>felt</b> lonely.", "We have <b>felt</b> welcome."], negative: ["I haven't <b>felt</b> alive.", "He hasn't <b>felt</b> well.", "They haven't <b>felt</b> the same."], question: ["Have you <b>felt</b> it?", "Have you ever <b>felt</b> sad?", "Has she <b>felt</b> pain?"] },
        future: { positive: ["You will <b>feel</b> relaxed.", "It will <b>feel</b> nice.", "I will <b>feel</b> better."], negative: ["You won't <b>feel</b> a thing.", "She won't <b>feel</b> lonely.", "It won't <b>feel</b> long."], question: ["Will it <b>feel</b> soft?", "How will I <b>feel</b>?", "Will you <b>feel</b> okay?"] }
    },
    "Fight": {
        infinitive: { positive: ["They had to <b>fight</b>.", "I will <b>fight</b> for it.", "We must <b>fight</b> back."], negative: ["Don't <b>fight</b> with him.", "I don't want to <b>fight</b>.", "They shouldn't <b>fight</b>."], question: ["Why do you <b>fight</b>?", "Can they <b>fight</b>?", "Who will <b>fight</b>?"] },
        past: { positive: ["They <b>fought</b> bravely.", "He <b>fought</b> a bear.", "We <b>fought</b> for hours."], negative: ["They didn't <b>fight</b> back.", "She didn't <b>fight</b> fair.", "I didn't <b>fight</b> him."], question: ["Who <b>fought</b> in the war?", "Why did they <b>fight</b>?", "Where did you <b>fight</b>?"] },
        participle: { positive: ["We have <b>fought</b> enough.", "He has <b>fought</b> hard.", "They have <b>fought</b> battles."], negative: ["We haven't <b>fought</b> yet.", "She hasn't <b>fought</b> the disease.", "You haven't <b>fought</b> truly."], question: ["Have you <b>fought</b> this boss?", "Have they <b>fought</b> before?", "Has he <b>fought</b> well?"] },
        future: { positive: ["I will <b>fight</b> for you.", "They will <b>fight</b> to win.", "He will <b>fight</b> back."], negative: ["I won't <b>fight</b> you.", "We won't <b>fight</b> over this.", "She won't <b>fight</b> alone."], question: ["Will they <b>fight</b>?", "When will we <b>fight</b>?", "Who will <b>fight</b> next?"] }
    },
    "Find": {
        infinitive: { positive: ["I hope to <b>find</b> a job.", "You will <b>find</b> love.", "Let's <b>find</b> out."], negative: ["I can't <b>find</b> my keys.", "Don't <b>find</b> fault.", "He won't <b>find</b> it."], question: ["Did you <b>find</b> it?", "Can we <b>find</b> a way?", "Where can I <b>find</b> rent?"] },
        past: { positive: ["He <b>found</b> a wallet.", "I <b>found</b> the solution.", "She <b>found</b> a puppy."], negative: ["He didn't <b>find</b> clues.", "We didn't <b>find</b> him.", "I didn't <b>find</b> time."], question: ["Where did you <b>find</b> this?", "Who <b>found</b> the treasure?", "Did she <b>find</b> her phone?"] },
        participle: { positive: ["She has <b>found</b> success.", "I have <b>found</b> the answer.", "They have <b>found</b> a home."], negative: ["She hasn't <b>found</b> love.", "We haven't <b>found</b> it yet.", "He hasn't <b>found</b> peace."], question: ["Have you <b>found</b> the way?", "Has he <b>found</b> a job?", "Have they <b>found</b> out?"] },
        future: { positive: ["You will <b>find</b> out.", "I will <b>find</b> a way.", "She will <b>find</b> happiness."], negative: ["You won't <b>find</b> me.", "He won't <b>find</b> trouble.", "It won't <b>find</b> you."], question: ["Will he <b>find</b> the treasure?", "When will you <b>find</b> it?", "Where will we <b>find</b> food?"] }
    },
    "Fly": {
        infinitive: { positive: ["Birds <b>fly</b> south.", "I want to <b>fly</b> a plane.", "Time seems to <b>fly</b>."], negative: ["Pigs don't <b>fly</b>.", "I can't <b>fly</b> yet.", "It won't <b>fly</b> away."], question: ["Can you <b>fly</b> a plane?", "Do birds <b>fly</b> at night?", "When do we <b>fly</b>?"] },
        past: { positive: ["We <b>flew</b> to Paris.", "The bird <b>flew</b> away.", "Time <b>flew</b> by."], negative: ["We didn't <b>fly</b> economy.", "He didn't <b>fly</b> yesterday.", "It never <b>flew</b> straight."], question: ["When did you <b>fly</b>?", "Who <b>flew</b> the jet?", "Where did it <b>fly</b>?"] },
        participle: { positive: ["He has <b>flown</b> many times.", "She has <b>flown</b> solo.", "They have <b>flown</b> home."], negative: ["He hasn't <b>flown</b> yet.", "I haven't <b>flown</b> in a year.", "We haven't <b>flown</b> there."], question: ["Have you <b>flown</b> solo?", "Has she <b>flown</b> before?", "Have they <b>flown</b> away?"] },
        future: { positive: ["Time will <b>fly</b>.", "I will <b>fly</b> to you.", "We will <b>fly</b> first class."], negative: ["It won't <b>fly</b> away.", "He won't <b>fly</b> again.", "They won't <b>fly</b> tomorrow."], question: ["Will you <b>fly</b> there?", "When will it <b>fly</b>?", "Will time <b>fly</b>?"] }
    },
    "Forget": {
        infinitive: { positive: ["Try to <b>forget</b> him.", "I will <b>forget</b> bad memories.", "It's easy to <b>forget</b>."], negative: ["Don't <b>forget</b> me.", "I can't <b>forget</b> you.", "Never <b>forget</b> the past."], question: ["Did you <b>forget</b> something?", "Will you <b>forget</b> me?", "Why do we <b>forget</b>?"] },
        past: { positive: ["She <b>forgot</b> her password.", "I <b>forgot</b> to call.", "He <b>forgot</b> the map."], negative: ["She didn't <b>forget</b> you.", "I didn't <b>forget</b> my promise.", "They didn't <b>forget</b> us."], question: ["Why did you <b>forget</b>?", "Who <b>forgot</b> the keys?", "What did he <b>forget</b>?"] },
        participle: { positive: ["I have <b>forgotten</b> the words.", "She has <b>forgotten</b> him.", "It is <b>forgotten</b>."], negative: ["I haven't <b>forgotten</b>.", "He hasn't <b>forgotten</b> the debt.", "We haven't <b>forgotten</b> you."], question: ["Have you <b>forgotten</b>?", "Has she <b>forgotten</b> me?", "Have they <b>forgotten</b> the rules?"] },
        future: { positive: ["You will <b>forget</b> this.", "Time will make you <b>forget</b>.", "He will <b>forget</b> eventually."], negative: ["You won't <b>forget</b> it.", "I won't <b>forget</b> this kindness.", "She won't <b>forget</b>."], question: ["Will he <b>forget</b>?", "Will you ever <b>forget</b>?", "What will you <b>forget</b>?"] }
    },
    "Forgive": {
        infinitive: { positive: ["You must <b>forgive</b>.", "I want to <b>forgive</b>.", "It is good to <b>forgive</b>."], negative: ["I cannot <b>forgive</b> liars.", "Don't <b>forgive</b> too easily.", "He won't <b>forgive</b>."], question: ["Can you <b>forgive</b> me?", "Will you <b>forgive</b> him?", "Why should I <b>forgive</b>?"] },
        past: { positive: ["He <b>forgave</b> his friend.", "She <b>forgave</b> the debt.", "God <b>forgave</b> him."], negative: ["He didn't <b>forgive</b> easily.", "I didn't <b>forgive</b> her.", "They never <b>forgave</b>."], question: ["Who <b>forgave</b> you?", "Why did she <b>forgive</b>?", "When did he <b>forgive</b>?"] },
        participle: { positive: ["She has <b>forgiven</b> him.", "I have <b>forgiven</b> it all.", "We have <b>forgiven</b> you."], negative: ["She hasn't <b>forgiven</b> yet.", "I haven't <b>forgiven</b> myself.", "He hasn't <b>forgiven</b> the betrayal."], question: ["Have you <b>forgiven</b>?", "Has he <b>forgiven</b> her?", "Have they <b>forgiven</b> us?"] },
        future: { positive: ["God will <b>forgive</b> you.", "She will <b>forgive</b> in time.", "I will <b>forgive</b>."], negative: ["I won't <b>forgive</b> that.", "He won't <b>forgive</b> cheating.", "God won't <b>forgive</b> sin."], question: ["Will she <b>forgive</b> me?", "Will you <b>forgive</b>?", "When will he <b>forgive</b>?"] }
    },
    "Get": {
        infinitive: { positive: ["I need to <b>get</b> ready.", "Let's <b>get</b> coffee.", "How to <b>get</b> there?"], negative: ["Don't <b>get</b> upset.", "I can't <b>get</b> it open.", "He doesn't <b>get</b> the joke."], question: ["Did you <b>get</b> the mail?", "Can I <b>get</b> a ride?", "Where did you <b>get</b> it?"] },
        past: { positive: ["She <b>got</b> a promotion.", "I <b>got</b> tired.", "He <b>got</b> a puppy."], negative: ["She didn't <b>get</b> the message.", "I didn't <b>get</b> paid.", "We didn't <b>get</b> lost."], question: ["What did you <b>get</b>?", "Who <b>got</b> the best score?", "When did she <b>get</b> here?"] },
        participle: { positive: ["We have <b>gotten</b> better.", "She has <b>gotten</b> sick.", "It has <b>gotten</b> dark."], negative: ["We haven't <b>gotten</b> far.", "I haven't <b>gotten</b> an answer.", "He hasn't <b>gotten</b> up."], question: ["Have you <b>gotten</b> sick?", "Has she <b>gotten</b> the job?", "Have they <b>gotten</b> closer?"] },
        future: { positive: ["I will <b>get</b> it done.", "He will <b>get</b> angry.", "We will <b>get</b> there."], negative: ["I won't <b>get</b> lost.", "She won't <b>get</b> caught.", "It won't <b>get</b> easier."], question: ["Will you <b>get</b> coffee?", "What will you <b>get</b>?", "When will we <b>get</b> paid?"] }
    },
    "Give": {
        infinitive: { positive: ["Please <b>give</b> me a hand.", "I want to <b>give</b> back.", "<b>Give</b> it a try."], negative: ["Don't <b>give</b> up.", "I won't <b>give</b> in.", "She cannot <b>give</b> more."], question: ["What can you <b>give</b>?", "Can you <b>give</b> money?", "Did you <b>give</b> it away?"] },
        past: { positive: ["He <b>gave</b> a speech.", "I <b>gave</b> him a book.", "She <b>gave</b> thanks."], negative: ["He didn't <b>give</b> money.", "I didn't <b>give</b> permission.", "We didn't <b>give</b> up."], question: ["Who <b>gave</b> you that?", "What did you <b>give</b>?", "Why did she <b>give</b> it?"] },
        participle: { positive: ["I have <b>given</b> my all.", "She has <b>given</b> birth.", "We have <b>given</b> notice."], negative: ["I haven't <b>given</b> up.", "He hasn't <b>given</b> an answer.", "They haven't <b>given</b> reasons."], question: ["Have you <b>given</b> blood?", "Has she <b>given</b> consent?", "What have you <b>given</b>?"] },
        future: { positive: ["She will <b>give</b> advice.", "I will <b>give</b> you a ride.", "It will <b>give</b> joy."], negative: ["She won't <b>give</b> in.", "I won't <b>give</b> money.", "He won't <b>give</b> us time."], question: ["Will you <b>give</b> a ride?", "What will they <b>give</b>?", "Will it <b>give</b> light?"] }
    },
    "Go": {
        infinitive: { positive: ["I want to <b>go</b> home.", "Let's <b>go</b> out.", "We must <b>go</b>."], negative: ["Don't <b>go</b> there.", "I can't <b>go</b> with you.", "He won't <b>go</b>."], question: ["Where do you <b>go</b>?", "Can we <b>go</b> now?", "Did he <b>go</b>?"] },
        past: { positive: ["They <b>went</b> to sleep.", "I <b>went</b> to the park.", "She <b>went</b> crazy."], negative: ["They didn't <b>go</b> out.", "I didn't <b>go</b> to school.", "He didn't <b>go</b> fast."], question: ["Where did they <b>go</b>?", "Why did you <b>go</b>?", "Who <b>went</b> with you?"] },
        participle: { positive: ["She has <b>gone</b> home.", "I have <b>gone</b> too far.", "It has <b>gone</b> bad."], negative: ["She hasn't <b>gone</b> yet.", "We haven't <b>gone</b> shopping.", "He hasn't <b>gone</b> anywhere."], question: ["Where has he <b>gone</b>?", "Has it <b>gone</b> wrong?", "Have you <b>gone</b> there?"] },
        future: { positive: ["We will <b>go</b> together.", "I will <b>go</b> tomorrow.", "He will <b>go</b> far."], negative: ["We won't <b>go</b> back.", "I won't <b>go</b> without you.", "She won't <b>go</b> alone."], question: ["Will you <b>go</b> with me?", "Where will you <b>go</b>?", "When will they <b>go</b>?"] }
    },
    "Grow": {
        infinitive: { positive: ["Plants <b>grow</b> fast.", "Kids <b>grow</b> up.", "Let it <b>grow</b>."], negative: ["Does money <b>grow</b> on trees?", "It doesn't <b>grow</b> here.", "Don't <b>grow</b> old."], question: ["How tall will it <b>grow</b>?", "Do you <b>grow</b> flowers?", "Where does it <b>grow</b>?"] },
        past: { positive: ["He <b>grew</b> a beard.", "The city <b>grew</b> rapidly.", "She <b>grew</b> tired."], negative: ["He didn't <b>grow</b> up here.", "It didn't <b>grow</b> well.", "We didn't <b>grow</b> apart."], question: ["How much did you <b>grow</b>?", "Where did he <b>grow</b> up?", "Why did it <b>grow</b>?"] },
        participle: { positive: ["It has <b>grown</b> dark.", "She has <b>grown</b> a lot.", "We have <b>grown</b> closer."], negative: ["It hasn't <b>grown</b> yet.", "He hasn't <b>grown</b> taller.", "They haven't <b>grown</b> crops."], question: ["Have you <b>grown</b> attached?", "Has the economy <b>grown</b>?", "What has <b>grown</b>?"] },
        future: { positive: ["Investments will <b>grow</b>.", "You will <b>grow</b> stronger.", "It will <b>grow</b> back."], negative: ["It won't <b>grow</b> back.", "He won't <b>grow</b> taller.", "Money won't <b>grow</b>."], question: ["Will this plant <b>grow</b>?", "How big will it <b>grow</b>?", "Will we <b>grow</b> old?"] }
    },
    "Have": {
        infinitive: { positive: ["I want to <b>have</b> fun.", "We <b>have</b> to leave.", "Can I <b>have</b> this?"], negative: ["I don't <b>have</b> time.", "We don't <b>have</b> money.", "He can't <b>have</b> it."], question: ["Do you <b>have</b> a pen?", "Can we <b>have</b> dinner?", "What does he <b>have</b>?"] },
        past: { positive: ["We <b>had</b> a good time.", "I <b>had</b> a dream.", "She <b>had</b> a baby."], negative: ["We didn't <b>have</b> enough.", "I didn't <b>have</b> breakfast.", "He didn't <b>have</b> issues."], question: ["Did you <b>have</b> breakfast?", "What did she <b>have</b>?", "Who <b>had</b> the key?"] },
        participle: { positive: ["I have <b>had</b> issues.", "She has <b>had</b> luck.", "We have <b>had</b> fun."], negative: ["I haven't <b>had</b> lunch.", "He hasn't <b>had</b> time.", "They haven't <b>had</b> a chance."], question: ["Have you <b>had</b> surgery?", "Has she <b>had</b> visitors?", "Have we <b>had</b> results?"] },
        future: { positive: ["We will <b>have</b> a party.", "I will <b>have</b> time.", "You will <b>have</b> it."], negative: ["We won't <b>have</b> delay.", "I won't <b>have</b> trouble.", "He won't <b>have</b> less."], question: ["Will you <b>have</b> some?", "When will we <b>have</b> lunch?", "What will you <b>have</b>?"] }
    },
    "Hear": {
        infinitive: { positive: ["I can <b>hear</b> you.", "I want to <b>hear</b> music.", "Speak so I can <b>hear</b>."], negative: ["I can't <b>hear</b> well.", "Don't <b>hear</b> wrong.", "She doesn't <b>hear</b> me."], question: ["Did you <b>hear</b> that?", "Can you <b>hear</b> me?", "Do you <b>hear</b> bells?"] },
        past: { positive: ["She <b>heard</b> a noise.", "I <b>heard</b> the news.", "We <b>heard</b> a song."], negative: ["She didn't <b>hear</b> me.", "I didn't <b>hear</b> you.", "He didn't <b>hear</b> the bell."], question: ["Who <b>heard</b> the news?", "What did you <b>hear</b>?", "When did you <b>hear</b> it?"] },
        participle: { positive: ["I have <b>heard</b> rumors.", "We have <b>heard</b> that.", "She has <b>heard</b> from him."], negative: ["I haven't <b>heard</b> back.", "They haven't <b>heard</b> the truth.", "He hasn't <b>heard</b> a sound."], question: ["Have you <b>heard</b>?", "Has she <b>heard</b> the song?", "Who has <b>heard</b>?"] },
        future: { positive: ["You will <b>hear</b> from us.", "We will <b>hear</b> the verdict.", "She will <b>hear</b> it."], negative: ["You won't <b>hear</b> a peep.", "I won't <b>hear</b> excuses.", "He won't <b>hear</b> the end."], question: ["Will we <b>hear</b> music?", "When will I <b>hear</b> back?", "Will you <b>hear</b> me out?"] }
    },
    "Know": {
        infinitive: { positive: ["I want to <b>know</b> why.", "You need to <b>know</b>.", "I <b>know</b> the way."], negative: ["I don't <b>know</b> him.", "She doesn't <b>know</b> how.", "We don't <b>know</b> yet."], question: ["Do you <b>know</b> me?", "Does he <b>know</b>?", "How do you <b>know</b>?"] },
        past: { positive: ["He <b>knew</b> the answer.", "I <b>knew</b> it.", "She <b>knew</b> the truth."], negative: ["He didn't <b>know</b> how.", "I didn't <b>know</b> that.", "We didn't <b>know</b> him."], question: ["Did you <b>know</b> that?", "Who <b>knew</b>?", "How did she <b>know</b>?"] },
        participle: { positive: ["I have <b>known</b> him for years.", "She has <b>known</b> peace.", "We have <b>known</b> poverty."], negative: ["I haven't <b>known</b> peace.", "He hasn't <b>known</b> love.", "They haven't <b>known</b> success."], question: ["Have you <b>known</b> love?", "How long have you <b>known</b>?", "Who has <b>known</b> trouble?"] },
        future: { positive: ["You will <b>know</b> soon.", "I will <b>know</b> the truth.", "He will <b>know</b> better."], negative: ["You won't <b>know</b> the difference.", "I won't <b>know</b> anyone.", "She won't <b>know</b>."], question: ["Will they <b>know</b>?", "When will I <b>know</b>?", "Who will <b>know</b>?"] }
    },
    "Learn": {
        infinitive: { positive: ["I want to <b>learn</b> Spanish.", "We must <b>learn</b>.", "Kids <b>learn</b> fast."], negative: ["I can't <b>learn</b> this.", "Don't <b>learn</b> bad habits.", "He doesn't <b>learn</b>."], question: ["Can you <b>learn</b> fast?", "What will you <b>learn</b>?", "How do we <b>learn</b>?"] },
        past: { positive: ["She <b>learnt</b> to drive.", "I <b>learned</b> a lot.", "He <b>learnt</b> quickly."], negative: ["She didn't <b>learn</b> at all.", "I didn't <b>learn</b> anything.", "We didn't <b>learn</b> the lesson."], question: ["What did you <b>learn</b>?", "Where did you <b>learn</b> that?", "How did he <b>learn</b>?"] },
        participle: { positive: ["We have <b>learnt</b> a lot.", "I have <b>learned</b> my lesson.", "She has <b>learnt</b> to cook."], negative: ["We haven't <b>learnt</b> yet.", "He hasn't <b>learned</b> respect.", "I haven't <b>learnt</b> enough."], question: ["Have you <b>learnt</b> it?", "What have they <b>learned</b>?", "Has she <b>learnt</b>?"] },
        future: { positive: ["He will <b>learn</b> well.", "You will <b>learn</b> in time.", "We will <b>learn</b> together."], negative: ["He won't <b>learn</b> lying.", "I won't <b>learn</b> that.", "She won't <b>learn</b> math."], question: ["Will you <b>learn</b>?", "What will he <b>learn</b>?", "When will we <b>learn</b>?"] }
    },
    "Lend": {
        infinitive: { positive: ["Can you <b>lend</b> me money?", "Please <b>lend</b> a hand.", "I can <b>lend</b> it."], negative: ["I won't <b>lend</b> it.", "Don't <b>lend</b> him cash.", "She can't <b>lend</b> books."], question: ["Will you <b>lend</b> a hand?", "Can I <b>lend</b> you this?", "Who will <b>lend</b> it?"] },
        past: { positive: ["He <b>lent</b> me his car.", "I <b>lent</b> him money.", "She <b>lent</b> her voice."], negative: ["He didn't <b>lend</b> support.", "I didn't <b>lend</b> it.", "We didn't <b>lend</b> anything."], question: ["Who <b>lent</b> you this?", "Did she <b>lend</b> it?", "Why did you <b>lend</b> him?"] },
        participle: { positive: ["She has <b>lent</b> her voice.", "I have <b>lent</b> money.", "We have <b>lent</b> our support."], negative: ["She hasn't <b>lent</b> any.", "He hasn't <b>lent</b> it back.", "I haven't <b>lent</b> books."], question: ["Have you <b>lent</b> it out?", "Has he <b>lent</b> money?", "Who has <b>lent</b> help?"] },
        future: { positive: ["I will <b>lend</b> it to you.", "He will <b>lend</b> a hand.", "Banks will <b>lend</b>."], negative: ["I won't <b>lend</b> more.", "She won't <b>lend</b> money.", "They won't <b>lend</b>."], question: ["Will the bank <b>lend</b>?", "Will you <b>lend</b> me $5?", "Who will <b>lend</b>?"] }
    },
    "Make": {
        infinitive: { positive: ["I like to <b>make</b> art.", "Let's <b>make</b> dinner.", "I can <b>make</b> it."], negative: ["Don't <b>make</b> a mess.", "I can't <b>make</b> it.", "He doesn't <b>make</b> sense."], question: ["Can you <b>make</b> it?", "What do you <b>make</b>?", "How do you <b>make</b> this?"] },
        past: { positive: ["Mom <b>made</b> dinner.", "I <b>made</b> a mistake.", "He <b>made</b> a joke."], negative: ["She didn't <b>make</b> the bed.", "I didn't <b>make</b> noise.", "We didn't <b>make</b> it."], question: ["Who <b>made</b> this?", "What did you <b>make</b>?", "How did she <b>make</b> it?"] },
        participle: { positive: ["We have <b>made</b> progress.", "I have <b>made</b> plans.", "She has <b>made</b> friends."], negative: ["We haven't <b>made</b> sure.", "I haven't <b>made</b> decision.", "He hasn't <b>made</b> peace."], question: ["Have you <b>made</b> friends?", "What have you <b>made</b>?", "Has she <b>made</b> cake?"] },
        future: { positive: ["This will <b>make</b> sense.", "I will <b>make</b> tea.", "He will <b>make</b> money."], negative: ["It won't <b>make</b> you rich.", "I won't <b>make</b> trouble.", "She won't <b>make</b> it."], question: ["Will that <b>make</b> you happy?", "What will you <b>make</b>?", "Will it <b>make</b> noise?"] }
    },
    "Meet": {
        infinitive: { positive: ["Nice to <b>meet</b> you.", "Let's <b>meet</b> up.", "I want to <b>meet</b> him."], negative: ["We shouldn't <b>meet</b>.", "I can't <b>meet</b> now.", "Don't <b>meet</b> strangers."], question: ["When shall we <b>meet</b>?", "Where do we <b>meet</b>?", "Can we <b>meet</b>?"] },
        past: { positive: ["We <b>met</b> yesterday.", "I <b>met</b> her before.", "They <b>met</b> online."], negative: ["We didn't <b>meet</b> before.", "I didn't <b>meet</b> him.", "She didn't <b>meet</b> us."], question: ["Where did you <b>meet</b>?", "Who did you <b>meet</b>?", "When did they <b>meet</b>?"] },
        participle: { positive: ["I have <b>met</b> him.", "We have <b>met</b> expectations.", "She has <b>met</b> the team."], negative: ["I haven't <b>met</b> her.", "They haven't <b>met</b> yet.", "He hasn't <b>met</b> the goal."], question: ["Have you <b>met</b> the boss?", "Has she <b>met</b> you?", "Who has <b>met</b> him?"] },
        future: { positive: ["We will <b>meet</b> again.", "I will <b>meet</b> you there.", "He will <b>meet</b> us."], negative: ["We won't <b>meet</b> today.", "I won't <b>meet</b> expectations.", "You won't <b>meet</b> him."], question: ["Will you <b>meet</b> me?", "Where will we <b>meet</b>?", "When will they <b>meet</b>?"] }
    },
    "Pay": {
        infinitive: { positive: ["I need to <b>pay</b> bills.", "Please <b>pay</b> attention.", "You must <b>pay</b>."], negative: ["Don't <b>pay</b> attention.", "I can't <b>pay</b>.", "He won't <b>pay</b>."], question: ["Who will <b>pay</b>?", "Can you <b>pay</b>?", "How do I <b>pay</b>?"] },
        past: { positive: ["He <b>paid</b> cash.", "I <b>paid</b> the bill.", "She <b>paid</b> well."], negative: ["He didn't <b>pay</b> taxes.", "I didn't <b>pay</b> attention.", "We didn't <b>pay</b> much."], question: ["How much did you <b>pay</b>?", "Who <b>paid</b> for this?", "Did he <b>pay</b>?"] },
        participle: { positive: ["I have <b>paid</b> my dues.", "She has <b>paid</b> off debt.", "We have <b>paid</b> rent."], negative: ["I haven't <b>paid</b> yet.", "He hasn't <b>paid</b> attention.", "They haven't <b>paid</b>."], question: ["Have you <b>paid</b>?", "Who has <b>paid</b>?", "Has she <b>paid</b>?"] },
        future: { positive: ["It will <b>pay</b> off.", "I will <b>pay</b> you.", "He will <b>pay</b> securely."], negative: ["You won't <b>pay</b> extra.", "I won't <b>pay</b> for that.", "She won't <b>pay</b>."], question: ["Will he <b>pay</b> us?", "When will you <b>pay</b>?", "Who will <b>pay</b> next?"] }
    },
    "Put": {
        infinitive: { positive: ["Please <b>put</b> it down.", "I <b>put</b> confidence in you.", "Just <b>put</b> it there."], negative: ["Don't <b>put</b> it there.", "I can't <b>put</b> it gently.", "He doesn't <b>put</b> effort."], question: ["Where should I <b>put</b> it?", "Can you <b>put</b> it back?", "Did you <b>put</b> it on?"] },
        past: { positive: ["She <b>put</b> on a coat.", "I <b>put</b> it away.", "He <b>put</b> sugar in tea."], negative: ["She didn't <b>put</b> makeup.", "I didn't <b>put</b> it there.", "He didn't <b>put</b> on shoes."], question: ["Where did you <b>put</b> my phone?", "Who <b>put</b> this here?", "Why did she <b>put</b> that?"] },
        participle: { positive: ["He has <b>put</b> effort.", "I have <b>put</b> it back.", "We have <b>put</b> up with it."], negative: ["He hasn't <b>put</b> it back.", "She hasn't <b>put</b> on weight.", "I haven't <b>put</b> it down."], question: ["Have you <b>put</b> gas?", "Where have you <b>put</b> it?", "Has he <b>put</b> it away?"] },
        future: { positive: ["I will <b>put</b> it away.", "He will <b>put</b> it right.", "She will <b>put</b> on music."], negative: ["I won't <b>put</b> up with it.", "He won't <b>put</b> it there.", "We won't <b>put</b> pressure."], question: ["Will you <b>put</b> it here?", "Where will you <b>put</b> it?", "Who will <b>put</b> it out?"] }
    },
    "Read": {
        infinitive: { positive: ["I love to <b>read</b> books.", "Please <b>read</b> this.", "I can <b>read</b> fast."], negative: ["I don't <b>read</b> much.", "Don't <b>read</b> my diary.", "He doesn't <b>read</b>."], question: ["Can you <b>read</b> this?", "Do you like to <b>read</b>?", "What do you <b>read</b>?"] },
        past: { positive: ["I <b>read</b> that book.", "She <b>read</b> my text.", "He <b>read</b> well."], negative: ["I didn't <b>read</b> the sign.", "She didn't <b>read</b> it.", "We didn't <b>read</b> far."], question: ["Has he <b>read</b> the memo?", "What did you <b>read</b>?", "Did she <b>read</b> this?"] }, // Past usually same spelling, diff pronunciation
        participle: { positive: ["She has <b>read</b> widely.", "I have <b>read</b> the news.", "We have <b>read</b> it."], negative: ["She hasn't <b>read</b> it.", "I haven't <b>read</b> that one.", "He hasn't <b>read</b> the rules."], question: ["Have you <b>read</b> today?", "Has he <b>read</b> the book?", "What have you <b>read</b>?"] },
        future: { positive: ["I will <b>read</b> it later.", "She will <b>read</b> to us.", "He will <b>read</b> the map."], negative: ["I won't <b>read</b> aloud.", "She won't <b>read</b> it.", "They won't <b>read</b>."], question: ["Will you <b>read</b> to me?", "What will you <b>read</b>?", "When will we <b>read</b>?"] }
    },
    "Ride": {
        infinitive: { positive: ["I want to <b>ride</b> a bike.", "Let's <b>ride</b> horses.", "Can you <b>ride</b>?"], negative: ["Don't <b>ride</b> too fast.", "I can't <b>ride</b>.", "He doesn't <b>ride</b>."], question: ["Can you <b>ride</b>?", "Do you want to <b>ride</b>?", "Where do we <b>ride</b>?"] },
        past: { positive: ["He <b>rode</b> a horse.", "I <b>rode</b> the bus.", "We <b>rode</b> bikes."], negative: ["He didn't <b>ride</b> the bus.", "I didn't <b>ride</b> today.", "She didn't <b>ride</b> along."], question: ["Who <b>rode</b> with you?", "Where did you <b>ride</b>?", "Did he <b>ride</b>?"] },
        participle: { positive: ["We have <b>ridden</b> far.", "She has <b>ridden</b> a camel.", "I have <b>ridden</b> that."], negative: ["We haven't <b>ridden</b> yet.", "I haven't <b>ridden</b> a horse.", "He hasn't <b>ridden</b>."], question: ["Have you <b>ridden</b> a camel?", "Where have you <b>ridden</b>?", "Has she <b>ridden</b>?"] },
        future: { positive: ["We will <b>ride</b> at dawn.", "I will <b>ride</b> with you.", "He will <b>ride</b> shotgun."], negative: ["We won't <b>ride</b> that.", "I won't <b>ride</b> alone.", "She won't <b>ride</b>."], question: ["Will you <b>ride</b> along?", "Where will we <b>ride</b>?", "Who will <b>ride</b>?"] }
    },
    "Run": {
        infinitive: { positive: ["I can <b>run</b> fast.", "I like to <b>run</b>.", "Let's <b>run</b> away."], negative: ["Do not <b>run</b> in halls.", "I can't <b>run</b> far.", "He doesn't <b>run</b>."], question: ["Why do you <b>run</b>?", "Can you <b>run</b>?", "Where do you <b>run</b>?"] },
        past: { positive: ["She <b>ran</b> a marathon.", "He <b>ran</b> home.", "I <b>ran</b> yesterday."], negative: ["She didn't <b>run</b> away.", "He didn't <b>run</b> fast.", "We didn't <b>run</b>."], question: ["Where did he <b>run</b>?", "Who <b>ran</b>?", "Why did she <b>run</b>?"] },
        participle: { positive: ["They have <b>run</b> out.", "I have <b>run</b> a mile.", "She has <b>run</b> business."], negative: ["They haven't <b>run</b> yet.", "I haven't <b>run</b> far.", "He hasn't <b>run</b> away."], question: ["Have you <b>run</b> this program?", "Has she <b>run</b>?", "Where have they <b>run</b>?"] },
        future: { positive: ["It will <b>run</b> smoothly.", "I will <b>run</b> there.", "He will <b>run</b> for office."], negative: ["It won't <b>run</b> forever.", "I won't <b>run</b> away.", "She won't <b>run</b>."], question: ["Will the car <b>run</b>?", "When will you <b>run</b>?", "Who will <b>run</b>?"] }
    },
    "Say": {
        infinitive: { positive: ["Please <b>say</b> hello.", "I want to <b>say</b> something.", "You must <b>say</b> it."], negative: ["Don't <b>say</b> that.", "I won't <b>say</b> anything.", "He doesn't <b>say</b> much."], question: ["What did you <b>say</b>?", "Can you <b>say</b> it again?", "Why <b>say</b> that?"] },
        past: { positive: ["He <b>said</b> yes.", "She <b>said</b> goodbye.", "I <b>said</b> sorry."], negative: ["He didn't <b>say</b> no.", "I didn't <b>say</b> that.", "She didn't <b>say</b> a word."], question: ["Who <b>said</b> that?", "What did he <b>say</b>?", "Why did she <b>say</b> no?"] },
        participle: { positive: ["Enough has been <b>said</b>.", "I have <b>said</b> yes.", "She has <b>said</b> it all."], negative: ["Nothing was <b>said</b>.", "He hasn't <b>said</b> anything.", "I haven't <b>said</b> goodbye."], question: ["Have you <b>said</b> thanks?", "What have you <b>said</b>?", "Has he <b>said</b> sorry?"] },
        future: { positive: ["I will <b>say</b> a prayer.", "He will <b>say</b> the truth.", "We will <b>say</b> yes."], negative: ["I won't <b>say</b> a word.", "She won't <b>say</b> no.", "They won't <b>say</b> anything."], question: ["What will you <b>say</b>?", "Will you <b>say</b> hello?", "When will he <b>say</b> it?"] }
    },
    "See": {
        infinitive: { positive: ["I want to <b>see</b> you.", "Can you <b>see</b> the board?", "Let's <b>see</b>."], negative: ["I can't <b>see</b> anything.", "Don't <b>see</b> him.", "He doesn't <b>see</b> well."], question: ["Can you <b>see</b> this?", "Did you <b>see</b> the game?", "Who did you <b>see</b>?"] },
        past: { positive: ["I <b>saw</b> a movie.", "She <b>saw</b> him yesterday.", "We <b>saw</b> it happen."], negative: ["I didn't <b>see</b> anything.", "She didn't <b>see</b> me.", "He didn't <b>see</b> the sign."], question: ["Did you <b>see</b> that?", "Who <b>saw</b> it?", "When did you <b>see</b> him?"] },
        participle: { positive: ["I have <b>seen</b> it all.", "She has <b>seen</b> enough.", "We have <b>seen</b> better days."], negative: ["I haven't <b>seen</b> him.", "She hasn't <b>seen</b> the movie.", "They haven't <b>seen</b> us."], question: ["Have you <b>seen</b> this?", "Has she <b>seen</b> the doctor?", "Who has <b>seen</b> my keys?"] },
        future: { positive: ["I will <b>see</b> you soon.", "We will <b>see</b> about that.", "He will <b>see</b> the truth."], negative: ["I won't <b>see</b> you.", "We won't <b>see</b> eye to eye.", "She won't <b>see</b> it coming."], question: ["Will I <b>see</b> you?", "When will we <b>see</b> results?", "Who will <b>see</b> this?"] }
    },
    "Sell": {
        infinitive: { positive: ["I want to <b>sell</b> my car.", "They <b>sell</b> fruit here.", "Can you <b>sell</b> this?"], negative: ["Don't <b>sell</b> yourself short.", "I won't <b>sell</b> it.", "He doesn't <b>sell</b> online."], question: ["Do you <b>sell</b> batteries?", "Will you <b>sell</b> your house?", "Why <b>sell</b> now?"] },
        past: { positive: ["He <b>sold</b> his bike.", "She <b>sold</b> lemonade.", "We <b>sold</b> out."], negative: ["He didn't <b>sell</b> much.", "I didn't <b>sell</b> anything.", "They didn't <b>sell</b> the company."], question: ["Who <b>sold</b> you this?", "What did you <b>sell</b>?", "When did she <b>sell</b> it?"] },
        participle: { positive: ["We have <b>sold</b> everything.", "She has <b>sold</b> the house.", "He has <b>sold</b> his soul."], negative: ["We haven't <b>sold</b> yet.", "It hasn't <b>sold</b> well.", "I haven't <b>sold</b> a thing."], question: ["Have you <b>sold</b> the car?", "What have they <b>sold</b>?", "Has it <b>sold</b>?"] },
        future: { positive: ["I will <b>sell</b> it tomorrow.", "He will <b>sell</b> his shares.", "It will <b>sell</b> fast."], negative: ["I won't <b>sell</b> to him.", "She won't <b>sell</b> her ring.", "They won't <b>sell</b> cheap."], question: ["Will you <b>sell</b> it?", "When will he <b>sell</b>?", "Will it <b>sell</b>?"] }
    },
    "Send": {
        infinitive: { positive: ["I need to <b>send</b> an email.", "Please <b>send</b> help.", "<b>Send</b> it now."], negative: ["Don't <b>send</b> money.", "I can't <b>send</b> attachments.", "He won't <b>send</b> it."], question: ["Can you <b>send</b> this?", "Did you <b>send</b> a card?", "Who will <b>send</b> it?"] },
        past: { positive: ["I <b>sent</b> a letter.", "She <b>sent</b> a gift.", "He <b>sent</b> me home."], negative: ["I didn't <b>send</b> that.", "She didn't <b>send</b> word.", "He didn't <b>send</b> flowers."], question: ["Who <b>sent</b> this?", "What did you <b>send</b>?", "When did she <b>send</b> it?"] },
        participle: { positive: ["I have <b>sent</b> the file.", "We have <b>sent</b> invites.", "She has <b>sent</b> money."], negative: ["I haven't <b>sent</b> it yet.", "We haven't <b>sent</b> the package.", "He hasn't <b>sent</b> news."], question: ["Have you <b>sent</b> the email?", "Has she <b>sent</b> word?", "What have you <b>sent</b>?"] },
        future: { positive: ["I will <b>send</b> it soon.", "He will <b>send</b> a reply.", "We will <b>send</b> someone."], negative: ["I won't <b>send</b> spam.", "She won't <b>send</b> it back.", "They won't <b>send</b> help."], question: ["Will you <b>send</b> me?", "When will you <b>send</b> it?", "Who will <b>send</b> flowers?"] }
    },
    "Sing": {
        infinitive: { positive: ["I like to <b>sing</b>.", "Let's <b>sing</b> a song.", "Can you <b>sing</b>?"], negative: ["I can't <b>sing</b> well.", "Don't <b>sing</b> loud.", "He doesn't <b>sing</b>."], question: ["Do you <b>sing</b>?", "What will you <b>sing</b>?", "Can she <b>sing</b>?"] },
        past: { positive: ["She <b>sang</b> beautifully.", "We <b>sang</b> together.", "He <b>sang</b> karaoke."], negative: ["She didn't <b>sing</b> solo.", "We didn't <b>sing</b> loud.", "I didn't <b>sing</b> that."], question: ["Who <b>sang</b> that song?", "What did you <b>sing</b>?", "Why did he <b>sing</b>?"] },
        participle: { positive: ["I have <b>sung</b> in a choir.", "She has <b>sung</b> opera.", "We have <b>sung</b> before."], negative: ["I haven't <b>sung</b> in years.", "He hasn't <b>sung</b> professionally.", "They haven't <b>sung</b> yet."], question: ["Have you <b>sung</b> this?", "Has she <b>sung</b> live?", "Who has <b>sung</b> well?"] },
        future: { positive: ["I will <b>sing</b> for you.", "She will <b>sing</b> at the wedding.", "We will <b>sing</b> together."], negative: ["I won't <b>sing</b> solo.", "He won't <b>sing</b>.", "They won't <b>sing</b> well."], question: ["Will you <b>sing</b>?", "What will she <b>sing</b>?", "When will we <b>sing</b>?"] }
    },
    "Sit": {
        infinitive: { positive: ["Please <b>sit</b> down.", "Can I <b>sit</b> here?", "Ready to <b>sit</b>."], negative: ["Don't <b>sit</b> on floor.", "I can't <b>sit</b> still.", "He won't <b>sit</b>."], question: ["Can I <b>sit</b>?", "Where do I <b>sit</b>?", "Will you <b>sit</b>?"] },
        past: { positive: ["He <b>sat</b> on the chair.", "We <b>sat</b> together.", "She <b>sat</b> waiting."], negative: ["He didn't <b>sit</b> down.", "I didn't <b>sit</b> there.", "They didn't <b>sit</b> still."], question: ["Where did you <b>sit</b>?", "Who <b>sat</b> here?", "Why did he <b>sit</b>?"] },
        participle: { positive: ["I have <b>sat</b> here hours.", "She has <b>sat</b> for exam.", "We have <b>sat</b> enough."], negative: ["I haven't <b>sat</b> down yet.", "He hasn't <b>sat</b> still.", "They haven't <b>sat</b> there."], question: ["Have you <b>sat</b> on this?", "Who has <b>sat</b> here?", "Has she <b>sat</b> long?"] },
        future: { positive: ["I will <b>sit</b> here.", "She will <b>sit</b> with us.", "We will <b>sit</b> down."], negative: ["I won't <b>sit</b> by him.", "He won't <b>sit</b> still.", "They won't <b>sit</b>."], question: ["Will you <b>sit</b>?", "Where will we <b>sit</b>?", "Who will <b>sit</b> next?"] }
    },
    "Sleep": {
        infinitive: { positive: ["I need to <b>sleep</b>.", "Go to <b>sleep</b>.", "Can you <b>sleep</b>?"], negative: ["I can't <b>sleep</b>.", "Don't <b>sleep</b> late.", "He doesn't <b>sleep</b> well."], question: ["Did you <b>sleep</b> well?", "When do you <b>sleep</b>?", "Why not <b>sleep</b>?"] },
        past: { positive: ["I <b>slept</b> 8 hours.", "She <b>slept</b> in.", "He <b>slept</b> on the sofa."], negative: ["I didn't <b>sleep</b> well.", "She didn't <b>sleep</b> enough.", "He didn't <b>sleep</b> at all."], question: ["How did you <b>sleep</b>?", "Where did he <b>sleep</b>?", "Who <b>slept</b> here?"] },
        participle: { positive: ["I have <b>slept</b> well.", "She has <b>slept</b> all day.", "We have <b>slept</b> there."], negative: ["I haven't <b>slept</b> yet.", "He hasn't <b>slept</b> continuously.", "They haven't <b>slept</b>."], question: ["Have you <b>slept</b>?", "Has she <b>slept</b> enough?", "Who has <b>slept</b>?"] },
        future: { positive: ["I will <b>sleep</b> soon.", "He will <b>sleep</b> soundly.", "We will <b>sleep</b> over."], negative: ["I won't <b>sleep</b> well.", "She won't <b>sleep</b> here.", "They won't <b>sleep</b>."], question: ["Will you <b>sleep</b>?", "Where will you <b>sleep</b>?", "When will he <b>sleep</b>?"] }
    },
    "Speak": {
        infinitive: { positive: ["I want to <b>speak</b> English.", "Can I <b>speak</b> to you?", "Let him <b>speak</b>."], negative: ["I don't <b>speak</b> French.", "Don't <b>speak</b> loudly.", "She can't <b>speak</b> now."], question: ["Do you <b>speak</b> English?", "Can we <b>speak</b>?", "Who will <b>speak</b>?"] },
        past: { positive: ["He <b>spoke</b> softly.", "She <b>spoke</b> to me.", "We <b>spoke</b> yesterday."], negative: ["He didn't <b>speak</b> clearly.", "I didn't <b>speak</b> up.", "She didn't <b>speak</b>."], question: ["Who <b>spoke</b>?", "What did he <b>speak</b> about?", "When did you <b>speak</b>?"] },
        participle: { positive: ["I have <b>spoken</b> truth.", "She has <b>spoken</b> to boss.", "We have <b>spoken</b> often."], negative: ["I haven't <b>spoken</b> to him.", "She hasn't <b>spoken</b> yet.", "They haven't <b>spoken</b>."], question: ["Have you <b>spoken</b>?", "Has he <b>spoken</b> up?", "Who has <b>spoken</b>?"] },
        future: { positive: ["I will <b>speak</b> at event.", "He will <b>speak</b> to you.", "We will <b>speak</b> soon."], negative: ["I won't <b>speak</b> lies.", "She won't <b>speak</b> again.", "They won't <b>speak</b>."], question: ["Will you <b>speak</b>?", "Who will <b>speak</b> next?", "When will we <b>speak</b>?"] }
    },
    "Spell": {
        infinitive: { positive: ["Can you <b>spell</b> it?", "I can <b>spell</b> my name.", "Learn to <b>spell</b>."], negative: ["I can't <b>spell</b> that.", "Don't <b>spell</b> it wrong.", "He doesn't <b>spell</b> well."], question: ["How do you <b>spell</b> cat?", "Can you <b>spell</b> this?", "Did I <b>spell</b> it right?"] },
        past: { positive: ["He <b>spelt</b> it wrong.", "She <b>spelt</b> her name.", "I <b>spelt</b> the word."], negative: ["He didn't <b>spell</b> it right.", "I didn't <b>spell</b> checking.", "She didn't <b>spell</b> clearly."], question: ["How did you <b>spell</b> it?", "Who <b>spelt</b> that?", "Why did he <b>spell</b> it so?"] },
        participle: { positive: ["I have <b>spelt</b> it correctly.", "She has <b>spelt</b> it out.", "We have <b>spelt</b> words."], negative: ["I haven't <b>spelt</b> it yet.", "He hasn't <b>spelt</b> well.", "They haven't <b>spelt</b>."], question: ["Have you <b>spelt</b> it?", "Has she <b>spelt</b> names?", "Who has <b>spelt</b>?"] },
        future: { positive: ["I will <b>spell</b> it for you.", "He will <b>spell</b> the word.", "We will <b>spell</b> check."], negative: ["I won't <b>spell</b> it out.", "She won't <b>spell</b> wrong.", "They won't <b>spell</b>."], question: ["Will you <b>spell</b> it?", "Can you <b>spell</b> later?", "How will you <b>spell</b> it?"] }
    },
    "Spend": {
        infinitive: { positive: ["I want to <b>spend</b> time.", "Don't <b>spend</b> too much.", "Let's <b>spend</b> the day."], negative: ["I won't <b>spend</b> a dime.", "Don't <b>spend</b> it all.", "We can't <b>spend</b> more."], question: ["How much did you <b>spend</b>?", "Where will you <b>spend</b> the night?", "Do you <b>spend</b> cash?"] },
        past: { positive: ["I <b>spent</b> all my money.", "She <b>spent</b> the day here.", "We <b>spent</b> hours."], negative: ["I didn't <b>spend</b> much.", "He didn't <b>spend</b> time.", "They didn't <b>spend</b> it."], question: ["What did you <b>spend</b> on?", "Who <b>spent</b> the most?", "How did you <b>spend</b> your day?"] },
        participle: { positive: ["I have <b>spent</b> enough.", "She has <b>spent</b> a lot.", "We have <b>spent</b> the budget."], negative: ["I haven't <b>spent</b> a penny.", "He hasn't <b>spent</b> time.", "They haven't <b>spent</b> saving."], question: ["Have you <b>spent</b> it?", "Has she <b>spent</b> money?", "What have they <b>spent</b>?"] },
        future: { positive: ["I will <b>spend</b> wisely.", "He will <b>spend</b> the night.", "We will <b>spend</b> money."], negative: ["I won't <b>spend</b> foolishly.", "She won't <b>spend</b> more.", "They won't <b>spend</b> the night."], question: ["Will you <b>spend</b> time?", "How much will you <b>spend</b>?", "Where will we <b>spend</b>?"] }
    },
    "Steal": {
        infinitive: { positive: ["It is wrong to <b>steal</b>.", "Don't <b>steal</b>.", "He might <b>steal</b>."], negative: ["I would never <b>steal</b>.", "You shouldn't <b>steal</b>.", "She won't <b>steal</b>."], question: ["Why did he <b>steal</b>?", "Did you <b>steal</b> this?", "Who would <b>steal</b>?"] },
        past: { positive: ["He <b>stole</b> a car.", "She <b>stole</b> the show.", "They <b>stole</b> money."], negative: ["He didn't <b>steal</b> it.", "I didn't <b>steal</b> anything.", "We didn't <b>steal</b>."], question: ["Who <b>stole</b> my pen?", "What did he <b>steal</b>?", "When did she <b>steal</b> it?"] },
        participle: { positive: ["Someone has <b>stolen</b> my bag.", "He has <b>stolen</b> hearts.", "It was <b>stolen</b>."], negative: ["He hasn't <b>stolen</b> before.", "Nothing was <b>stolen</b>.", "She hasn't <b>stolen</b>."], question: ["Has he <b>stolen</b>?", "What was <b>stolen</b>?", "Have they <b>stolen</b> anything?"] },
        future: { positive: ["He will <b>steal</b> again.", "They will <b>steal</b> your heart.", "She will <b>steal</b> bases."], negative: ["I won't <b>steal</b>.", "He won't <b>steal</b> from you.", "They won't <b>steal</b>."], question: ["Will someone <b>steal</b> it?", "Will you <b>steal</b>?", "Who will <b>steal</b>?"] }
    },
    "Swim": {
        infinitive: { positive: ["I love to <b>swim</b>.", "Let's <b>swim</b> here.", "Can you <b>swim</b>?"], negative: ["Don't <b>swim</b> there.", "I can't <b>swim</b>.", "He doesn't <b>swim</b>."], question: ["Do you <b>swim</b>?", "Where can we <b>swim</b>?", "Can she <b>swim</b>?"] },
        past: { positive: ["We <b>swam</b> in the ocean.", "She <b>swam</b> fast.", "He <b>swam</b> across."], negative: ["We didn't <b>swim</b> far.", "I didn't <b>swim</b> yesterday.", "She didn't <b>swim</b>."], question: ["Where did you <b>swim</b>?", "Who <b>swam</b> with you?", "When did they <b>swim</b>?"] },
        participle: { positive: ["I have <b>swum</b> here before.", "She has <b>swum</b> miles.", "We have <b>swum</b> deep."], negative: ["I haven't <b>swum</b> in years.", "He hasn't <b>swum</b> there.", "They haven't <b>swum</b>."], question: ["Have you <b>swum</b> here?", "Has she <b>swum</b> laps?", "Who has <b>swum</b>?"] },
        future: { positive: ["I will <b>swim</b> tomorrow.", "He will <b>swim</b> laps.", "We will <b>swim</b> there."], negative: ["I won't <b>swim</b> today.", "She won't <b>swim</b> deep.", "They won't <b>swim</b>."], question: ["Will you <b>swim</b>?", "Where will we <b>swim</b>?", "When will he <b>swim</b>?"] }
    },
    "Take": {
        infinitive: { positive: ["Please <b>take</b> one.", "I need to <b>take</b> a break.", "<b>Take</b> your time."], negative: ["Don't <b>take</b> it.", "I won't <b>take</b> long.", "He can't <b>take</b> more."], question: ["Can I <b>take</b> this?", "Will you <b>take</b> me?", "Did you <b>take</b> it?"] },
        past: { positive: ["He <b>took</b> my advice.", "I <b>took</b> the bus.", "She <b>took</b> a photo."], negative: ["He didn't <b>take</b> it well.", "I didn't <b>take</b> the money.", "She didn't <b>take</b> part."], question: ["Who <b>took</b> my phone?", "What did you <b>take</b>?", "Where did he <b>take</b> us?"] },
        participle: { positive: ["I have <b>taken</b> enough.", "It is <b>taken</b>.", "She has <b>taken</b> over."], negative: ["I haven't <b>taken</b> it.", "He hasn't <b>taken</b> meds.", "Seats aren't <b>taken</b>."], question: ["Have you <b>taken</b> notes?", "Is this seat <b>taken</b>?", "What have you <b>taken</b>?"] },
        future: { positive: ["I will <b>take</b> care of it.", "He will <b>take</b> a nap.", "It will <b>take</b> time."], negative: ["I won't <b>take</b> it.", "She won't <b>take</b> risks.", "They won't <b>take</b> long."], question: ["Will you <b>take</b> this?", "Who will <b>take</b> over?", "What will it <b>take</b>?"] }
    },
    "Teach": {
        infinitive: { positive: ["I want to <b>teach</b>.", "Can you <b>teach</b> me?", "He loves to <b>teach</b>."], negative: ["Don't <b>teach</b> bad words.", "I can't <b>teach</b> math.", "She doesn't <b>teach</b>."], question: ["Do you <b>teach</b> English?", "Can you <b>teach</b> him?", "What do you <b>teach</b>?"] },
        past: { positive: ["She <b>taught</b> me well.", "He <b>taught</b> history.", "I <b>taught</b> myself."], negative: ["She didn't <b>teach</b> us.", "He didn't <b>teach</b> today.", "We didn't <b>teach</b> that."], question: ["Who <b>taught</b> you?", "What did he <b>teach</b>?", "Where did you <b>teach</b>?"] },
        participle: { positive: ["He has <b>taught</b> for years.", "I have <b>taught</b> kids.", "She has <b>taught</b> many."], negative: ["He hasn't <b>taught</b> me.", "We haven't <b>taught</b> that.", "She hasn't <b>taught</b> before."], question: ["Have you <b>taught</b> online?", "Has he <b>taught</b> you?", "What has she <b>taught</b>?"] },
        future: { positive: ["I will <b>teach</b> you.", "He will <b>teach</b> class.", "We will <b>teach</b> everything."], negative: ["I won't <b>teach</b> lies.", "She won't <b>teach</b> tomorrow.", "They won't <b>teach</b>."], question: ["Will you <b>teach</b> me?", "What will he <b>teach</b>?", "When will you <b>teach</b>?"] }
    },
    "Tell": {
        infinitive: { positive: ["Please <b>tell</b> me.", "I can <b>tell</b> stories.", "Time will <b>tell</b>."], negative: ["Don't <b>tell</b> lies.", "I won't <b>tell</b> anyone.", "He can't <b>tell</b>."], question: ["Can you <b>tell</b> time?", "Did you <b>tell</b> him?", "What did you <b>tell</b>?"] },
        past: { positive: ["He <b>told</b> the truth.", "I <b>told</b> you so.", "She <b>told</b> a story."], negative: ["He didn't <b>tell</b> me.", "I didn't <b>tell</b> lies.", "They didn't <b>tell</b> us."], question: ["Who <b>told</b> you?", "What did he <b>tell</b>?", "Why did she <b>tell</b>?"] },
        participle: { positive: ["I have <b>told</b> you twice.", "She has <b>told</b> everyone.", "We have <b>told</b> stories."], negative: ["I haven't <b>told</b> him.", "He hasn't <b>told</b> tales.", "They haven't <b>told</b> yet."], question: ["Have you <b>told</b> her?", "Who has <b>told</b>?", "Has he <b>told</b> truth?"] },
        future: { positive: ["I will <b>tell</b> him.", "Time will <b>tell</b>.", "She will <b>tell</b> us."], negative: ["I won't <b>tell</b> secret.", "He won't <b>tell</b> lies.", "They won't <b>tell</b>."], question: ["Will you <b>tell</b> me?", "Who will you <b>tell</b>?", "What will they <b>tell</b>?"] }
    },
    "Think": {
        infinitive: { positive: ["I need to <b>think</b>.", "Do you <b>think</b> so?", "Take time to <b>think</b>."], negative: ["Don't <b>think</b> bad thoughts.", "I don't <b>think</b> so.", "He doesn't <b>think</b>."], question: ["What do you <b>think</b>?", "How do you <b>think</b>?", "Do you <b>think</b> fast?"] },
        past: { positive: ["I <b>thought</b> of you.", "He <b>thought</b> hard.", "We <b>thought</b> alike."], negative: ["I didn't <b>think</b> of that.", "She didn't <b>think</b> twice.", "They didn't <b>think</b>."], question: ["What did you <b>think</b>?", "Who <b>thought</b> of this?", "Why did he <b>think</b> that?"] },
        participle: { positive: ["I have <b>thought</b> about it.", "She has <b>thought</b> long.", "We have <b>thought</b> over."], negative: ["I haven't <b>thought</b> yet.", "He hasn't <b>thought</b> through.", "They haven't <b>thought</b>."], question: ["Have you <b>thought</b>?", "Has she <b>thought</b> why?", "Who has <b>thought</b> this?"] },
        future: { positive: ["I will <b>think</b> about it.", "He will <b>think</b> tomorrow.", "We will <b>think</b> positive."], negative: ["I won't <b>think</b> negative.", "She won't <b>think</b> less.", "He won't <b>think</b>."], question: ["Will you <b>think</b> of me?", "What will you <b>think</b>?", "When will we <b>think</b>?"] }
    },
    "Throw": {
        infinitive: { positive: ["Don't <b>throw</b> trash.", "Can you <b>throw</b> far?", "<b>Throw</b> the ball."], negative: ["Don't <b>throw</b> it away.", "I can't <b>throw</b> well.", "He doesn't <b>throw</b>."], question: ["Can you <b>throw</b>?", "Did you <b>throw</b> it?", "What did you <b>throw</b>?"] },
        past: { positive: ["He <b>threw</b> the ball.", "She <b>threw</b> a party.", "I <b>threw</b> it out."], negative: ["He didn't <b>throw</b> hard.", "I didn't <b>throw</b> it.", "She didn't <b>throw</b> up."], question: ["Who <b>threw</b> this?", "Where did you <b>throw</b>?", "Why did he <b>throw</b> it?"] },
        participle: { positive: ["I have <b>thrown</b> it away.", "He has <b>thrown</b> far.", "She has <b>thrown</b> up."], negative: ["I haven't <b>thrown</b> it.", "He hasn't <b>thrown</b> pass.", "They haven't <b>thrown</b>."], question: ["Have you <b>thrown</b> it?", "Has he <b>thrown</b> ball?", "What have they <b>thrown</b>?"] },
        future: { positive: ["I will <b>throw</b> it.", "He will <b>throw</b> far.", "We will <b>throw</b> party."], negative: ["I won't <b>throw</b> up.", "He won't <b>throw</b> game.", "She won't <b>throw</b>."], question: ["Will you <b>throw</b>?", "Who will <b>throw</b> first?", "When will we <b>throw</b>?"] }
    },
    "Understand": {
        infinitive: { positive: ["I want to <b>understand</b>.", "Try to <b>understand</b>.", "You will <b>understand</b>."], negative: ["I don't <b>understand</b>.", "He cannot <b>understand</b>.", "Don't mis<b>understand</b>."], question: ["Do you <b>understand</b>?", "Can you <b>understand</b>?", "How to <b>understand</b>?"] },
        past: { positive: ["I <b>understood</b> everything.", "She <b>understood</b> me.", "We <b>understood</b> the rule."], negative: ["I didn't <b>understand</b>.", "He didn't <b>understand</b> why.", "They didn't <b>understand</b>."], question: ["Did you <b>understand</b>?", "Who <b>understood</b>?", "What did he <b>understand</b>?"] },
        participle: { positive: ["I have <b>understood</b>.", "She has <b>understood</b> task.", "We have <b>understood</b>."], negative: ["I haven't <b>understood</b> yet.", "He hasn't <b>understood</b>.", "They haven't <b>understood</b>."], question: ["Have you <b>understood</b>?", "Has she <b>understood</b>?", "Who has <b>understood</b>?"] },
        future: { positive: ["You will <b>understand</b> later.", "He will <b>understand</b> soon.", "We will <b>understand</b>."], negative: ["You won't <b>understand</b>.", "He won't <b>understand</b> it.", "They won't <b>understand</b>."], question: ["Will you <b>understand</b>?", "When will I <b>understand</b>?", "Who will <b>understand</b>?"] }
    },
    "Wake": {
        infinitive: { positive: ["I need to <b>wake</b> up.", "Please <b>wake</b> me.", "Don't <b>wake</b> the baby."], negative: ["Don't <b>wake</b> him.", "I can't <b>wake</b> early.", "He doesn't <b>wake</b> easy."], question: ["When do you <b>wake</b>?", "Can you <b>wake</b> me?", "Did he <b>wake</b>?"] },
        past: { positive: ["I <b>woke</b> up late.", "She <b>woke</b> early.", "He <b>woke</b> the dog."], negative: ["I didn't <b>wake</b> up.", "He didn't <b>wake</b> me.", "She didn't <b>wake</b>."], question: ["When did you <b>wake</b>?", "Who <b>woke</b> you?", "Why did he <b>wake</b>?"] },
        participle: { positive: ["I have <b>woken</b> up.", "She has <b>woken</b> early.", "We have <b>woken</b>."], negative: ["I haven't <b>woken</b> yet.", "He hasn't <b>woken</b> up.", "They haven't <b>woken</b>."], question: ["Have you <b>woken</b>?", "Has she <b>woken</b> up?", "Who has <b>woken</b>?"] },
        future: { positive: ["I will <b>wake</b> you.", "He will <b>wake</b> up.", "We will <b>wake</b> early."], negative: ["I won't <b>wake</b> late.", "He won't <b>wake</b> her.", "They won't <b>wake</b>."], question: ["Will you <b>wake</b> me?", "When will you <b>wake</b>?", "Who will <b>wake</b>?"] }
    },
    "Wear": {
        infinitive: { positive: ["I like to <b>wear</b> blue.", "You must <b>wear</b> a helmet.", "She wants to <b>wear</b> it."], negative: ["Don't <b>wear</b> that.", "I won't <b>wear</b> it.", "He doesn't <b>wear</b> ties."], question: ["What will you <b>wear</b>?", "Do you <b>wear</b> glasses?", "Can I <b>wear</b> this?"] },
        past: { positive: ["She <b>wore</b> a dress.", "He <b>wore</b> a hat.", "I <b>wore</b> boots."], negative: ["She didn't <b>wear</b> makeup.", "I didn't <b>wear</b> a coat.", "He didn't <b>wear</b> it."], question: ["What did you <b>wear</b>?", "Who <b>wore</b> red?", "Why did she <b>wear</b> that?"] },
        participle: { positive: ["I have <b>worn</b> this before.", "She has <b>worn</b> it out.", "We have <b>worn</b> masks."], negative: ["I haven't <b>worn</b> it.", "He hasn't <b>worn</b> out.", "They haven't <b>worn</b> ties."], question: ["Have you <b>worn</b> this?", "Has she <b>worn</b> glasses?", "What have you <b>worn</b>?"] },
        future: { positive: ["I will <b>wear</b> a suit.", "She will <b>wear</b> white.", "We will <b>wear</b> smiles."], negative: ["I won't <b>wear</b> that.", "He won't <b>wear</b> green.", "They won't <b>wear</b> it."], question: ["Will you <b>wear</b> this?", "What will she <b>wear</b>?", "When will we <b>wear</b> it?"] }
    },
    "Write": {
        infinitive: { positive: ["I want to <b>write</b> a book.", "Please <b>write</b> me.", "He loves to <b>write</b>."], negative: ["I cannot <b>write</b> well.", "Don't <b>write</b> on walls.", "She doesn't <b>write</b>."], question: ["Can you <b>write</b>?", "What do you <b>write</b>?", "Did you <b>write</b> it?"] },
        past: { positive: ["She <b>wrote</b> a letter.", "He <b>wrote</b> a poem.", "I <b>wrote</b> notes."], negative: ["She didn't <b>write</b> back.", "I didn't <b>write</b> it.", "He didn't <b>write</b> well."], question: ["Who <b>wrote</b> this?", "What did you <b>write</b>?", "When did she <b>write</b>?"] },
        participle: { positive: ["I have <b>written</b> books.", "It is <b>written</b>.", "She has <b>written</b> home."], negative: ["I haven't <b>written</b> yet.", "He hasn't <b>written</b> back.", "Nothing is <b>written</b>."], question: ["Have you <b>written</b>?", "What have you <b>written</b>?", "Has she <b>written</b>?"] },
        future: { positive: ["I will <b>write</b> soon.", "He will <b>write</b> a song.", "We will <b>write</b> exams."], negative: ["I won't <b>write</b> lies.", "She won't <b>write</b> back.", "They won't <b>write</b>."], question: ["Will you <b>write</b>?", "Who will <b>write</b>?", "When will you <b>write</b>?"] }
    }
};
