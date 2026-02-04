const VERB_SENTENCES = {
    "Be (am/is/are)": {
        presentSimple: { positive: "I <b>am</b> a doctor.", negative: "I <b>am not</b> late.", question: "<b>Are</b> you happy?" },
        past: { positive: "She <b>was</b> at the party.", negative: "We <b>weren't</b> ready.", question: "<b>Was</b> it cold?" },
        presentContinuous: { positive: "I am <b>being</b> careful.", negative: "I am not <b>being</b> rude.", question: "Are you <b>being</b> serious?" },
        presentPerfect: { positive: "I have <b>been</b> there.", negative: "I haven't <b>been</b> ready.", question: "Have you <b>been</b> waiting?" },
        goingTo: { positive: "I am <b>going to be</b> late.", negative: "It isn't <b>going to be</b> easy.", question: "Are you <b>going to be</b> okay?" }
    },
    "Become": {
        presentSimple: { positive: "He <b>becomes</b> angry easily.", negative: "It <b>doesn't become</b> easier.", question: "Does he <b>become</b> sad?" },
        past: { positive: "She <b>became</b> famous.", negative: "It didn't <b>become</b> an issue.", question: "Did she <b>become</b> famous?" },
        presentContinuous: { positive: "It is <b>becoming</b> clear.", negative: "He isn't <b>becoming</b> better.", question: "Is it <b>becoming</b> dark?" },
        presentPerfect: { positive: "It has <b>become</b> clear.", negative: "He hasn't <b>become</b> a member.", question: "Has it <b>become</b> easier?" },
        goingTo: { positive: "I am <b>going to become</b> a pilot.", negative: "It isn't <b>going to become</b> easier.", question: "Are you <b>going to become</b> a member?" }
    },
    "Begin": {
        presentSimple: { positive: "I <b>begin</b> work at 9.", negative: "It <b>doesn't begin</b> yet.", question: "Does the show <b>begin</b> now?" },
        past: { positive: "It <b>began</b> to rain.", negative: "He didn't <b>begin</b> the work.", question: "When did it <b>begin</b>?" },
        presentContinuous: { positive: "It is <b>beginning</b> to rain.", negative: "He isn't <b>beginning</b> properly.", question: "Is it <b>beginning</b> to snow?" },
        presentPerfect: { positive: "It has <b>begun</b>.", negative: "He hasn't <b>begun</b> yet.", question: "Has it <b>begun</b>?" },
        goingTo: { positive: "It is <b>going to begin</b> soon.", negative: "It isn't <b>going to begin</b> yet.", question: "Is it <b>going to begin</b>?" }
    },
    "Break": {
        presentSimple: { positive: "Glass <b>breaks</b> easily.", negative: "I <b>don't break</b> promises.", question: "Does it <b>break</b>?" },
        past: { positive: "He <b>broke</b> his leg.", negative: "I didn't <b>break</b> it.", question: "Who <b>broke</b> the window?" },
        presentContinuous: { positive: "He is <b>breaking</b> the rules.", negative: "It isn't <b>breaking</b>.", question: "Why are you <b>breaking</b> it?" },
        presentPerfect: { positive: "He has <b>broken</b> the glass.", negative: "I haven't <b>broken</b> it.", question: "Have you <b>broken</b> the law?" },
        goingTo: { positive: "It is <b>going to break</b>.", negative: "I am not <b>going to break</b> it.", question: "Is it <b>going to break</b>?" }
    },
    "Bring": {
        presentSimple: { positive: "I <b>bring</b> lunch every day.", negative: "He <b>doesn't bring</b> friends.", question: "Do you <b>bring</b> water?" },
        past: { positive: "She <b>brought</b> a cake.", negative: "I didn't <b>bring</b> an umbrella.", question: "What did you <b>bring</b>?" },
        presentContinuous: { positive: "I am <b>bringing</b> the drinks.", negative: "He isn't <b>bringing</b> food.", question: "Are you <b>bringing</b> friends?" },
        presentPerfect: { positive: "I have <b>brought</b> it.", negative: "He hasn't <b>brought</b> snacks.", question: "Have you <b>brought</b> money?" },
        goingTo: { positive: "I am <b>going to bring</b> dessert.", negative: "I am not <b>going to bring</b> it.", question: "Are you <b>going to bring</b> him?" }
    },
    "Build": {
        presentSimple: { positive: "They <b>build</b> houses here.", negative: "We <b>don't build</b> walls.", question: "Do you <b>build</b> models?" },
        past: { positive: "He <b>built</b> a robot.", negative: "He didn't <b>build</b> it.", question: "Who <b>built</b> this?" },
        presentContinuous: { positive: "They are <b>building</b> a bridge.", negative: "She isn't <b>building</b> it.", question: "What are you <b>building</b>?" },
        presentPerfect: { positive: "They have <b>built</b> a house.", negative: "We haven't <b>built</b> it.", question: "Have you <b>built</b> this?" },
        goingTo: { positive: "We are <b>going to build</b> a shed.", negative: "He isn't <b>going to build</b>.", question: "Are you <b>going to build</b> it?" }
    },
    "Buy": {
        presentSimple: { positive: "I <b>buy</b> groceries weekly.", negative: "She <b>doesn't buy</b> candy.", question: "Do you <b>buy</b> milk?" },
        past: { positive: "She <b>bought</b> a dress.", negative: "He didn't <b>buy</b> it.", question: "Who <b>bought</b> this?" },
        presentContinuous: { positive: "I am <b>buying</b> tickets.", negative: "We aren't <b>buying</b> a house.", question: "Are you <b>buying</b> it?" },
        presentPerfect: { positive: "I have <b>bought</b> a car.", negative: "She hasn't <b>bought</b> anything.", question: "Have you <b>bought</b> tickets?" },
        goingTo: { positive: "I am <b>going to buy</b> a car.", negative: "He isn't <b>going to buy</b> it.", question: "Are you <b>going to buy</b> lunch?" }
    },
    "Catch": {
        presentSimple: { positive: "I <b>catch</b> the bus at 8.", negative: "He <b>doesn't catch</b> colds.", question: "Do you <b>catch</b> fish?" },
        past: { positive: "He <b>caught</b> the ball.", negative: "I didn't <b>catch</b> that.", question: "Did you <b>catch</b> it?" },
        presentContinuous: { positive: "He is <b>catching</b> a cold.", negative: "She isn't <b>catching</b> anything.", question: "Are you <b>catching</b> the bus?" },
        presentPerfect: { positive: "I have <b>caught</b> a fish.", negative: "He hasn't <b>caught</b> the bus.", question: "Have you <b>caught</b> it?" },
        goingTo: { positive: "I am <b>going to catch</b> you.", negative: "He isn't <b>going to catch</b> it.", question: "Are you <b>going to catch</b> the bus?" }
    },
    "Choose": {
        presentSimple: { positive: "I <b>choose</b> red.", negative: "She <b>doesn't choose</b> wisely.", question: "Do you <b>choose</b> this?" },
        past: { positive: "She <b>chose</b> him.", negative: "I didn't <b>choose</b> this.", question: "Who <b>chose</b> the movie?" },
        presentContinuous: { positive: "I am <b>choosing</b> a gift.", negative: "He isn't <b>choosing</b> well.", question: "Are you <b>choosing</b> sides?" },
        presentPerfect: { positive: "I have <b>chosen</b>.", negative: "She hasn't <b>chosen</b> yet.", question: "Have you <b>chosen</b> one?" },
        goingTo: { positive: "I am <b>going to choose</b> now.", negative: "I am not <b>going to choose</b>.", question: "Are you <b>going to choose</b>?" }
    },
    "Come": {
        presentSimple: { positive: "He <b>comes</b> early.", negative: "She <b>doesn't come</b> often.", question: "Do you <b>come</b> here?" },
        past: { positive: "He <b>came</b> home late.", negative: "They didn't <b>come</b>.", question: "Who <b>came</b> to the party?" },
        presentContinuous: { positive: "She is <b>coming</b> now.", negative: "He isn't <b>coming</b> back.", question: "Are you <b>coming</b>?" },
        presentPerfect: { positive: "He has <b>come</b> home.", negative: "They haven't <b>come</b> yet.", question: "Has she <b>come</b> back?" },
        goingTo: { positive: "He is <b>going to come</b>.", negative: "I am not <b>going to come</b>.", question: "Are you <b>going to come</b>?" }
    },
    "Cost": {
        presentSimple: { positive: "It <b>costs</b> a lot.", negative: "It <b>doesn't cost</b> much.", question: "Does it <b>cost</b> money?" },
        past: { positive: "It <b>cost</b> $50.", negative: "It didn't <b>cost</b> a thing.", question: "Did it <b>cost</b> too much?" },
        presentContinuous: { positive: "It is <b>costing</b> time.", negative: "It isn't <b>costing</b> extra.", question: "Is it <b>costing</b> money?" },
        presentPerfect: { positive: "It has <b>cost</b> a fortune.", negative: "It hasn't <b>cost</b> much.", question: "Has it <b>cost</b> you?" },
        goingTo: { positive: "It is <b>going to cost</b> money.", negative: "It isn't <b>going to cost</b> much.", question: "Is it <b>going to cost</b> a lot?" }
    },
    "Cut": {
        presentSimple: { positive: "This knife <b>cuts</b> well.", negative: "It <b>doesn't cut</b>.", question: "Does it <b>cut</b>?" },
        past: { positive: "He <b>cut</b> his finger.", negative: "She didn't <b>cut</b> it.", question: "Who <b>cut</b> the cake?" },
        presentContinuous: { positive: "I am <b>cutting</b> paper.", negative: "He isn't <b>cutting</b> grass.", question: "Are you <b>cutting</b> it?" },
        presentPerfect: { positive: "I have <b>cut</b> the paper.", negative: "He hasn't <b>cut</b> it.", question: "Have you <b>cut</b> yourself?" },
        goingTo: { positive: "I am <b>going to cut</b> it.", negative: "He isn't <b>going to cut</b>.", question: "Are you <b>going to cut</b> the cake?" }
    },
    "Do": {
        presentSimple: { positive: "I <b>do</b> my best.", negative: "He <b>doesn't do</b> it.", question: "Do you <b>do</b> yoga?" },
        past: { positive: "She <b>did</b> the work.", negative: "I didn't <b>do</b> it.", question: "Did you <b>do</b> that?" },
        presentContinuous: { positive: "I am <b>doing</b> dishes.", negative: "He isn't <b>doing</b> anything.", question: "What are you <b>doing</b>?" },
        presentPerfect: { positive: "I have <b>done</b> it.", negative: "He hasn't <b>done</b> the work.", question: "Have you <b>done</b> this?" },
        goingTo: { positive: "I am <b>going to do</b> it.", negative: "She isn't <b>going to do</b> it.", question: "Are you <b>going to do</b> work?" }
    },
    "Draw": {
        presentSimple: { positive: "I <b>draw</b> cartoons.", negative: "He <b>doesn't draw</b> well.", question: "Do you <b>draw</b>?" },
        past: { positive: "She <b>drew</b> a map.", negative: "I didn't <b>draw</b> it.", question: "Who <b>drew</b> this?" },
        presentContinuous: { positive: "He is <b>drawing</b> a car.", negative: "I am not <b>drawing</b>.", question: "Are you <b>drawing</b>?" },
        presentPerfect: { positive: "I have <b>drawn</b> a circle.", negative: "He hasn't <b>drawn</b> anything.", question: "Have you <b>drawn</b> this?" },
        goingTo: { positive: "I am <b>going to draw</b>.", negative: "He isn't <b>going to draw</b>.", question: "Are you <b>going to draw</b> this?" }
    },
    "Drink": {
        presentSimple: { positive: "I <b>drink</b> water.", negative: "She <b>doesn't drink</b> soda.", question: "Do you <b>drink</b> tea?" },
        past: { positive: "He <b>drank</b> milk.", negative: "I didn't <b>drink</b> it.", question: "Who <b>drank</b> the juice?" },
        presentContinuous: { positive: "I am <b>drinking</b> coffee.", negative: "He isn't <b>drinking</b>.", question: "Are you <b>drinking</b>?" },
        presentPerfect: { positive: "I have <b>drunk</b> enough.", negative: "She hasn't <b>drunk</b> wine.", question: "Have you <b>drunk</b> it?" },
        goingTo: { positive: "I am <b>going to drink</b> water.", negative: "She isn't <b>going to drink</b>.", question: "Are you <b>going to drink</b>?" }
    },
    "Drive": {
        presentSimple: { positive: "I <b>drive</b> to work.", negative: "He <b>doesn't drive</b>.", question: "Do you <b>drive</b>?" },
        past: { positive: "She <b>drove</b> home.", negative: "We didn't <b>drive</b> fast.", question: "Who <b>drove</b>?" },
        presentContinuous: { positive: "I am <b>driving</b> now.", negative: "He isn't <b>driving</b>.", question: "Are you <b>driving</b>?" },
        presentPerfect: { positive: "I have <b>driven</b> this car.", negative: "She hasn't <b>driven</b> yet.", question: "Have you <b>driven</b> before?" },
        goingTo: { positive: "I am <b>going to drive</b>.", negative: "She isn't <b>going to drive</b>.", question: "Are you <b>going to drive</b>?" }
    },
    "Eat": {
        presentSimple: { positive: "I <b>eat</b> pizza.", negative: "He <b>doesn't eat</b> meat.", question: "Do you <b>eat</b> fish?" },
        past: { positive: "We <b>ate</b> dinner.", negative: "I didn't <b>eat</b> much.", question: "What did you <b>eat</b>?" },
        presentContinuous: { positive: "I am <b>eating</b> now.", negative: "She isn't <b>eating</b>.", question: "Are you <b>eating</b>?" },
        presentPerfect: { positive: "I have <b>eaten</b>.", negative: "He hasn't <b>eaten</b> breakfast.", question: "Have you <b>eaten</b> yet?" },
        goingTo: { positive: "I am <b>going to eat</b>.", negative: "He isn't <b>going to eat</b>.", question: "Are you <b>going to eat</b>?" }
    },
    "Fall": {
        presentSimple: { positive: "Leaves <b>fall</b>.", negative: "It <b>doesn't fall</b>.", question: "Does it <b>fall</b>?" },
        past: { positive: "He <b>fell</b> down.", negative: "She didn't <b>fall</b>.", question: "Did you <b>fall</b>?" },
        presentContinuous: { positive: "Rain is <b>falling</b>.", negative: "Prices aren't <b>falling</b>.", question: "Is snow <b>falling</b>?" },
        presentPerfect: { positive: "He has <b>fallen</b> asleep.", negative: "It hasn't <b>fallen</b> yet.", question: "Have you <b>fallen</b>?" },
        goingTo: { positive: "It is <b>going to fall</b>.", negative: "You aren't <b>going to fall</b>.", question: "Is it <b>going to fall</b>?" }
    },
    "Feel": {
        presentSimple: { positive: "I <b>feel</b> happy.", negative: "I <b>don't feel</b> well.", question: "Do you <b>feel</b> it?" },
        past: { positive: "She <b>felt</b> cold.", negative: "I didn't <b>feel</b> pain.", question: "Did you <b>feel</b> that?" },
        presentContinuous: { positive: "I am <b>feeling</b> sick.", negative: "He isn't <b>feeling</b> well.", question: "Are you <b>feeling</b> okay?" },
        presentPerfect: { positive: "I have <b>felt</b> this before.", negative: "We haven't <b>felt</b> it.", question: "Have you <b>felt</b> sad?" },
        goingTo: { positive: "You are <b>going to feel</b> better.", negative: "It isn't <b>going to feel</b> good.", question: "Are you <b>going to feel</b> it?" }
    },
    "Fight": {
        presentSimple: { positive: "They <b>fight</b> a lot.", negative: "We <b>don't fight</b>.", question: "Do they <b>fight</b>?" },
        past: { positive: "We <b>fought</b> hard.", negative: "He didn't <b>fight</b> back.", question: "Who <b>fought</b>?" },
        presentContinuous: { positive: "They are <b>fighting</b>.", negative: "We aren't <b>fighting</b>.", question: "Are you <b>fighting</b>?" },
        presentPerfect: { positive: "We have <b>fought</b> well.", negative: "They haven't <b>fought</b>.", question: "Have you <b>fought</b>?" },
        goingTo: { positive: "I am <b>going to fight</b>.", negative: "He isn't <b>going to fight</b>.", question: "Are they <b>going to fight</b>?" }
    },
    "Find": {
        presentSimple: { positive: "I <b>find</b> clues.", negative: "He <b>doesn't find</b> it.", question: "Do you <b>find</b> it easy?" },
        past: { positive: "She <b>found</b> money.", negative: "We didn't <b>find</b> him.", question: "Did you <b>find</b> it?" },
        presentContinuous: { positive: "I am <b>finding</b> joy.", negative: "He isn't <b>finding</b> answers.", question: "Are you <b>finding</b> it?" },
        presentPerfect: { positive: "I have <b>found</b> it.", negative: "She hasn't <b>found</b> her keys.", question: "Have you <b>found</b> him?" },
        goingTo: { positive: "I am <b>going to find</b> out.", negative: "You aren't <b>going to find</b> it.", question: "Are we <b>going to find</b> it?" }
    },
    "Fly": {
        presentSimple: { positive: "Birds <b>fly</b>.", negative: "Pigs <b>don't fly</b>.", question: "Do you <b>fly</b> often?" },
        past: { positive: "We <b>flew</b> home.", negative: "It didn't <b>fly</b>.", question: "Where did you <b>fly</b>?" },
        presentContinuous: { positive: "I am <b>flying</b> now.", negative: "He isn't <b>flying</b>.", question: "Are you <b>flying</b>?" },
        presentPerfect: { positive: "I have <b>flown</b> there.", negative: "She hasn't <b>flown</b> before.", question: "Have you <b>flown</b>?" },
        goingTo: { positive: "I am <b>going to fly</b>.", negative: "She isn't <b>going to fly</b>.", question: "Are you <b>going to fly</b>?" }
    },
    "Forget": {
        presentSimple: { positive: "I <b>forget</b> names.", negative: "He <b>doesn't forget</b>.", question: "Do you <b>forget</b>?" },
        past: { positive: "I <b>forgot</b> my keys.", negative: "She didn't <b>forget</b>.", question: "Did you <b>forget</b>?" },
        presentContinuous: { positive: "I am <b>forgetting</b> Italian.", negative: "He isn't <b>forgetting</b> you.", question: "Are you <b>forgetting</b>?" },
        presentPerfect: { positive: "I have <b>forgotten</b>.", negative: "He hasn't <b>forgotten</b>.", question: "Have you <b>forgotten</b>?" },
        goingTo: { positive: "You are <b>going to forget</b>.", negative: "I am not <b>going to forget</b>.", question: "Are you <b>going to forget</b>?" }
    },
    "Forgive": {
        presentSimple: { positive: "I <b>forgive</b> you.", negative: "He <b>doesn't forgive</b>.", question: "Do you <b>forgive</b>?" },
        past: { positive: "She <b>forgave</b> him.", negative: "I didn't <b>forgive</b> her.", question: "Did you <b>forgive</b>?" },
        presentContinuous: { positive: "I am <b>forgiving</b> debt.", negative: "He isn't <b>forgiving</b>.", question: "Are you <b>forgiving</b> me?" },
        presentPerfect: { positive: "I have <b>forgiven</b> you.", negative: "He hasn't <b>forgiven</b> her.", question: "Have you <b>forgiven</b>?" },
        goingTo: { positive: "I am <b>going to forgive</b>.", negative: "She isn't <b>going to forgive</b>.", question: "Are you <b>going to forgive</b>?" }
    },
    "Get": {
        presentSimple: { positive: "I <b>get</b> up early.", negative: "He <b>doesn't get</b> it.", question: "Do you <b>get</b> mail?" },
        past: { positive: "She <b>got</b> a gift.", negative: "I didn't <b>get</b> paid.", question: "What did you <b>get</b>?" },
        presentContinuous: { positive: "It is <b>getting</b> cold.", negative: "We aren't <b>getting</b> out.", question: "Are you <b>getting</b> tired?" },
        presentPerfect: { positive: "I have <b>gotten</b> better.", negative: "He hasn't <b>gotten</b> it.", question: "Have you <b>gotten</b> the message?" },
        goingTo: { positive: "I am <b>going to get</b> it.", negative: "He isn't <b>going to get</b> in.", question: "Are you <b>going to get</b> up?" }
    },
    "Give": {
        presentSimple: { positive: "I <b>give</b> gifts.", negative: "She <b>doesn't give</b> up.", question: "Do you <b>give</b> money?" },
        past: { positive: "He <b>gave</b> a speech.", negative: "I didn't <b>give</b> it.", question: "What did you <b>give</b>?" },
        presentContinuous: { positive: "I am <b>giving</b> back.", negative: "He isn't <b>giving</b> up.", question: "Are you <b>giving</b>?" },
        presentPerfect: { positive: "I have <b>given</b> enough.", negative: "She hasn't <b>given</b> up.", question: "Have you <b>given</b> details?" },
        goingTo: { positive: "I am <b>going to give</b>.", negative: "She isn't <b>going to give</b>.", question: "Are you <b>going to give</b>?" }
    },
    "Go": {
        presentSimple: { positive: "I <b>go</b> to school.", negative: "He <b>doesn't go</b> there.", question: "Do you <b>go</b>?" },
        past: { positive: "She <b>went</b> home.", negative: "We didn't <b>go</b> out.", question: "Where did you <b>go</b>?" },
        presentContinuous: { positive: "I am <b>going</b> now.", negative: "He isn't <b>going</b>.", question: "Where are you <b>going</b>?" },
        presentPerfect: { positive: "She has <b>gone</b> out.", negative: "I haven't <b>gone</b> yet.", question: "Have you <b>gone</b> there?" },
        goingTo: { positive: "I am <b>going to go</b>.", negative: "She isn't <b>going to go</b>.", question: "Are you <b>going to go</b>?" }
    },
    "Grow": {
        presentSimple: { positive: "Flowers <b>grow</b>.", negative: "It <b>doesn't grow</b>.", question: "Do they <b>grow</b>?" },
        past: { positive: "He <b>grew</b> tall.", negative: "It didn't <b>grow</b>.", question: "How much did it <b>grow</b>?" },
        presentContinuous: { positive: "It is <b>growing</b>.", negative: "He isn't <b>growing</b>.", question: "Is it <b>growing</b>?" },
        presentPerfect: { positive: "It has <b>grown</b> alot.", negative: "He hasn't <b>grown</b> up.", question: "Have you <b>grown</b>?" },
        goingTo: { positive: "It is <b>going to grow</b>.", negative: "I am not <b>going to grow</b>.", question: "Is it <b>going to grow</b>?" }
    },
    "Have": {
        presentSimple: { positive: "I <b>have</b> a cat.", negative: "I <b>don't have</b> time.", question: "Do you <b>have</b> it?" },
        past: { positive: "We <b>had</b> fun.", negative: "I didn't <b>have</b> cash.", question: "Did you <b>have</b> fun?" },
        presentContinuous: { positive: "I am <b>having</b> lunch.", negative: "He isn't <b>having</b> fun.", question: "Are you <b>having</b> trouble?" },
        presentPerfect: { positive: "I have <b>had</b> enough.", negative: "We haven't <b>had</b> lunch.", question: "Have you <b>had</b> time?" },
        goingTo: { positive: "I am <b>going to have</b> it.", negative: "You aren't <b>going to have</b>.", question: "Are we <b>going to have</b> fun?" }
    },
    "Hear": {
        presentSimple: { positive: "I <b>hear</b> birds.", negative: "I <b>don't hear</b> you.", question: "Do you <b>hear</b> that?" },
        past: { positive: "She <b>heard</b> a noise.", negative: "I didn't <b>hear</b> it.", question: "Did you <b>hear</b> me?" },
        presentContinuous: { positive: "I am <b>hearing</b> things.", negative: "He isn't <b>hearing</b> well.", question: "Are you <b>hearing</b> this?" },
        presentPerfect: { positive: "I have <b>heard</b> it.", negative: "She hasn't <b>heard</b> of it.", question: "Have you <b>heard</b> this?" },
        goingTo: { positive: "You are <b>going to hear</b>.", negative: "He isn't <b>going to hear</b>.", question: "Are you <b>going to hear</b>?" }
    },
    "Know": {
        presentSimple: { positive: "I <b>know</b> the answer.", negative: "I <b>don't know</b>.", question: "Do you <b>know</b> him?" },
        past: { positive: "He <b>knew</b> it.", negative: "I didn't <b>know</b>.", question: "Did you <b>know</b>?" },
        presentContinuous: { positive: "I am <b>getting to know</b> him.", negative: "I am not <b>knowing</b>.", question: "Are you <b>getting to know</b>?" },
        presentPerfect: { positive: "I have <b>known</b> him for years.", negative: "Usually used in past simple.", question: "Have you <b>known</b> this?" },
        goingTo: { positive: "You are <b>going to know</b>.", negative: "He isn't <b>going to know</b>.", question: "Are you <b>going to know</b>?" }
    },
    "Learn": {
        presentSimple: { positive: "I <b>learn</b> fast.", negative: "He <b>doesn't learn</b>.", question: "Do you <b>learn</b>?" },
        past: { positive: "She <b>learned</b> English.", negative: "I didn't <b>learn</b>.", question: "What did you <b>learn</b>?" },
        presentContinuous: { positive: "I am <b>learning</b> to drive.", negative: "He isn't <b>learning</b>.", question: "Are you <b>learning</b>?" },
        presentPerfect: { positive: "I have <b>learned</b> a lot.", negative: "We haven't <b>learned</b> it.", question: "Have you <b>learned</b> this?" },
        goingTo: { positive: "I am <b>going to learn</b>.", negative: "She isn't <b>going to learn</b>.", question: "Are you <b>going to learn</b>?" }
    },
    "Lend": {
        presentSimple: { positive: "I <b>lend</b> books.", negative: "He <b>doesn't lend</b> money.", question: "Do you <b>lend</b> it?" },
        past: { positive: "She <b>lent</b> me a pen.", negative: "I didn't <b>lend</b> it.", question: "Who <b>lent</b> you money?" },
        presentContinuous: { positive: "I am <b>lending</b> a hand.", negative: "He isn't <b>lending</b>.", question: "Are you <b>lending</b>?" },
        presentPerfect: { positive: "I have <b>lent</b> it out.", negative: "He hasn't <b>lent</b> me any.", question: "Have you <b>lent</b> it?" },
        goingTo: { positive: "I am <b>going to lend</b> it.", negative: "She isn't <b>going to lend</b>.", question: "Are you <b>going to lend</b>?" }
    },
    "Make": {
        presentSimple: { positive: "I <b>make</b> cake.", negative: "He <b>doesn't make</b> noise.", question: "Do you <b>make</b> art?" },
        past: { positive: "She <b>made</b> dinner.", negative: "I didn't <b>make</b> it.", question: "What did you <b>make</b>?" },
        presentContinuous: { positive: "I am <b>making</b> coffee.", negative: "He isn't <b>making</b> sense.", question: "What are you <b>making</b>?" },
        presentPerfect: { positive: "I have <b>made</b> a choice.", negative: "She hasn't <b>made</b> it.", question: "Have you <b>made</b> plans?" },
        goingTo: { positive: "I am <b>going to make</b> it.", negative: "She isn't <b>going to make</b>.", question: "Are you <b>going to make</b>?" }
    },
    "Meet": {
        presentSimple: { positive: "I <b>meet</b> friends.", negative: "He <b>doesn't meet</b> us.", question: "Do you <b>meet</b> here?" },
        past: { positive: "We <b>met</b> yesterday.", negative: "I didn't <b>meet</b> him.", question: "When did you <b>meet</b>?" },
        presentContinuous: { positive: "I am <b>meeting</b> him.", negative: "She isn't <b>meeting</b> us.", question: "Are you <b>meeting</b>?" },
        presentPerfect: { positive: "We have <b>met</b> before.", negative: "I haven't <b>met</b> him.", question: "Have you <b>met</b> her?" },
        goingTo: { positive: "I am <b>going to meet</b> her.", negative: "We aren't <b>going to meet</b>.", question: "Are you <b>going to meet</b>?" }
    },
    "Pay": {
        presentSimple: { positive: "I <b>pay</b> with cash.", negative: "He <b>doesn't pay</b> attention.", question: "Do you <b>pay</b> taxes?" },
        past: { positive: "I <b>paid</b> the bill.", negative: "He didn't <b>pay</b> much.", question: "Who <b>paid</b> for this?" },
        presentContinuous: { positive: "I am <b>paying</b> the bill.", negative: "He isn't <b>paying</b> attention.", question: "Are you <b>paying</b>?" },
        presentPerfect: { positive: "I have <b>paid</b> debts.", negative: "He hasn't <b>paid</b> yet.", question: "Have you <b>paid</b> it?" },
        goingTo: { positive: "I am <b>going to pay</b>.", negative: "He isn't <b>going to pay</b>.", question: "Are you <b>going to pay</b>?" }
    },
    "Put": {
        presentSimple: { positive: "I <b>put</b> it here.", negative: "He <b>doesn't put</b> it back.", question: "Do you <b>put</b> sugar?" },
        past: { positive: "She <b>put</b> it away.", negative: "I didn't <b>put</b> it there.", question: "Where did you <b>put</b> it?" },
        presentContinuous: { positive: "I am <b>putting</b> it down.", negative: "He isn't <b>putting</b> effort.", question: "Are you <b>putting</b> it on?" },
        presentPerfect: { positive: "I have <b>put</b> it back.", negative: "He hasn't <b>put</b> it away.", question: "Have you <b>put</b> it out?" },
        goingTo: { positive: "I am <b>going to put</b> it away.", negative: "He isn't <b>going to put</b> it.", question: "Are you <b>going to put</b> it?" }
    },
    "Read": {
        presentSimple: { positive: "I <b>read</b> books.", negative: "He <b>doesn't read</b> fast.", question: "Do you <b>read</b> often?" },
        past: { positive: "I <b>read</b> the news.", negative: "She didn't <b>read</b> it.", question: "Did you <b>read</b> this?" },
        presentContinuous: { positive: "I am <b>reading</b> a book.", negative: "She isn't <b>reading</b>.", question: "Are you <b>reading</b>?" },
        presentPerfect: { positive: "I have <b>read</b> that.", negative: "He hasn't <b>read</b> it.", question: "Have you <b>read</b> this?" },
        goingTo: { positive: "I am <b>going to read</b>.", negative: "She isn't <b>going to read</b>.", question: "Are you <b>going to read</b>?" }
    },
    "Ride": {
        presentSimple: { positive: "I <b>ride</b> my bike.", negative: "He <b>doesn't ride</b> horses.", question: "Do you <b>ride</b> the bus?" },
        past: { positive: "He <b>rode</b> the bus.", negative: "I didn't <b>ride</b> today.", question: "Did you <b>ride</b>?" },
        presentContinuous: { positive: "I am <b>riding</b> a horse.", negative: "He isn't <b>riding</b>.", question: "Are you <b>riding</b>?" },
        presentPerfect: { positive: "I have <b>ridden</b> a bike.", negative: "She hasn't <b>ridden</b> one.", question: "Have you <b>ridden</b> a horse?" },
        goingTo: { positive: "I am <b>going to ride</b>.", negative: "He isn't <b>going to ride</b>.", question: "Are you <b>going to ride</b>?" }
    },
    "Run": {
        presentSimple: { positive: "I <b>run</b> every day.", negative: "He <b>doesn't run</b> fast.", question: "Do you <b>run</b> here?" },
        past: { positive: "She <b>ran</b> yesterday.", negative: "He didn't <b>run</b> far.", question: "Did they <b>run</b>?" },
        presentContinuous: { positive: "I am <b>running</b> late.", negative: "He isn't <b>running</b>.", question: "Are you <b>running</b>?" },
        presentPerfect: { positive: "I have <b>run</b> miles.", negative: "He hasn't <b>run</b> away.", question: "Have you <b>run</b> well?" },
        goingTo: { positive: "I am <b>going to run</b>.", negative: "He isn't <b>going to run</b>.", question: "Are you <b>going to run</b>?" }
    },
    "Say": {
        presentSimple: { positive: "I <b>say</b> hello.", negative: "He <b>doesn't say</b> much.", question: "Do you <b>say</b> yes?" },
        past: { positive: "He <b>said</b> hello.", negative: "She didn't <b>say</b> that.", question: "What did you <b>say</b>?" },
        presentContinuous: { positive: "I am <b>saying</b> it now.", negative: "He isn't <b>saying</b> anything.", question: "What are you <b>saying</b>?" },
        presentPerfect: { positive: "I have <b>said</b> enough.", negative: "She hasn't <b>said</b> yes.", question: "Have you <b>said</b> it?" },
        goingTo: { positive: "I am <b>going to say</b> it.", negative: "He isn't <b>going to say</b>.", question: "Are you <b>going to say</b>?" }
    },
    "See": {
        presentSimple: { positive: "I <b>see</b> the bird.", negative: "He <b>doesn't see</b> well.", question: "Do you <b>see</b> it?" },
        past: { positive: "I <b>saw</b> him.", negative: "She didn't <b>see</b> me.", question: "Did you <b>see</b> that?" },
        presentContinuous: { positive: "I am <b>seeing</b> clearly.", negative: "He isn't <b>seeing</b> anyone.", question: "Are you <b>seeing</b> this?" },
        presentPerfect: { positive: "I have <b>seen</b> it.", negative: "We haven't <b>seen</b> him.", question: "Have you <b>seen</b> this?" },
        goingTo: { positive: "I am <b>going to see</b> him.", negative: "We aren't <b>going to see</b>.", question: "Are you <b>going to see</b>?" }
    },
    "Sell": {
        presentSimple: { positive: "I <b>sell</b> cars.", negative: "He <b>doesn't sell</b> food.", question: "Do you <b>sell</b> this?" },
        past: { positive: "He <b>sold</b> his bike.", negative: "I didn't <b>sell</b> it.", question: "What did you <b>sell</b>?" },
        presentContinuous: { positive: "I am <b>selling</b> my house.", negative: "He isn't <b>selling</b>.", question: "Are you <b>selling</b>?" },
        presentPerfect: { positive: "I have <b>sold</b> it.", negative: "He hasn't <b>sold</b> out.", question: "Have you <b>sold</b> yours?" },
        goingTo: { positive: "I am <b>going to sell</b> it.", negative: "He isn't <b>going to sell</b>.", question: "Are you <b>going to sell</b>?" }
    },
    "Send": {
        presentSimple: { positive: "I <b>send</b> emails.", negative: "He <b>doesn't send</b> mail.", question: "Do you <b>send</b> money?" },
        past: { positive: "I <b>sent</b> a letter.", negative: "She didn't <b>send</b> it.", question: "Who <b>sent</b> this?" },
        presentContinuous: { positive: "I am <b>sending</b> a package.", negative: "He isn't <b>sending</b> it.", question: "Are you <b>sending</b>?" },
        presentPerfect: { positive: "I have <b>sent</b> it.", negative: "She hasn't <b>sent</b> mail.", question: "Have you <b>sent</b> it?" },
        goingTo: { positive: "I am <b>going to send</b> it.", negative: "She isn't <b>going to send</b>.", question: "Are you <b>going to send</b>?" }
    },
    "Sing": {
        presentSimple: { positive: "I <b>sing</b> songs.", negative: "He <b>doesn't sing</b> well.", question: "Do you <b>sing</b>?" },
        past: { positive: "She <b>sang</b> a song.", negative: "I didn't <b>sing</b>.", question: "Did you <b>sing</b>?" },
        presentContinuous: { positive: "I am <b>singing</b> now.", negative: "He isn't <b>singing</b>.", question: "Are you <b>singing</b>?" },
        presentPerfect: { positive: "I have <b>sung</b> this.", negative: "She hasn't <b>sung</b> yet.", question: "Have you <b>sung</b> before?" },
        goingTo: { positive: "I am <b>going to sing</b>.", negative: "He isn't <b>going to sing</b>.", question: "Are you <b>going to sing</b>?" }
    },
    "Sit": {
        presentSimple: { positive: "I <b>sit</b> here.", negative: "He <b>doesn't sit</b> still.", question: "Do you <b>sit</b> down?" },
        past: { positive: "I <b>sat</b> down.", negative: "He didn't <b>sit</b>.", question: "Where did you <b>sit</b>?" },
        presentContinuous: { positive: "I am <b>sitting</b>.", negative: "He isn't <b>sitting</b>.", question: "Are you <b>sitting</b>?" },
        presentPerfect: { positive: "I have <b>sat</b> there.", negative: "He hasn't <b>sat</b> down.", question: "Have you <b>sat</b> here?" },
        goingTo: { positive: "I am <b>going to sit</b>.", negative: "He isn't <b>going to sit</b>.", question: "Are you <b>going to sit</b>?" }
    },
    "Sleep": {
        presentSimple: { positive: "I <b>sleep</b> well.", negative: "He <b>doesn't sleep</b> much.", question: "Do you <b>sleep</b> late?" },
        past: { positive: "I <b>slept</b> poorly.", negative: "She didn't <b>sleep</b>.", question: "Did you <b>sleep</b>?" },
        presentContinuous: { positive: "I am <b>sleeping</b> now.", negative: "He isn't <b>sleeping</b>.", question: "Are you <b>sleeping</b>?" },
        presentPerfect: { positive: "I have <b>slept</b> well.", negative: "I haven't <b>slept</b>.", question: "Have you <b>slept</b>?" },
        goingTo: { positive: "I am <b>going to sleep</b>.", negative: "He isn't <b>going to sleep</b>.", question: "Are you <b>going to sleep</b>?" }
    },
    "Speak": {
        presentSimple: { positive: "I <b>speak</b> English.", negative: "He <b>doesn't speak</b> clearly.", question: "Do you <b>speak</b> French?" },
        past: { positive: "He <b>spoke</b> softly.", negative: "She didn't <b>speak</b>.", question: "Who <b>spoke</b>?" },
        presentContinuous: { positive: "I am <b>speaking</b>.", negative: "He isn't <b>speaking</b>.", question: "Are you <b>speaking</b>?" },
        presentPerfect: { positive: "I have <b>spoken</b> up.", negative: "He hasn't <b>spoken</b>.", question: "Have you <b>spoken</b>?" },
        goingTo: { positive: "I am <b>going to speak</b>.", negative: "He isn't <b>going to speak</b>.", question: "Are you <b>going to speak</b>?" }
    },
    "Spell": {
        presentSimple: { positive: "I <b>spell</b> names.", negative: "He <b>doesn't spell</b> well.", question: "Do you <b>spell</b> that?" },
        past: { positive: "I <b>spelt</b> it wrong.", negative: "He didn't <b>spell</b> it.", question: "How did you <b>spell</b> it?" },
        presentContinuous: { positive: "I am <b>spelling</b> the word.", negative: "He isn't <b>spelling</b>.", question: "Are you <b>spelling</b>?" },
        presentPerfect: { positive: "I have <b>spelt</b> it right.", negative: "He hasn't <b>spelt</b> it.", question: "Have you <b>spelt</b> this?" },
        goingTo: { positive: "I am <b>going to spell</b> it.", negative: "He isn't <b>going to spell</b>.", question: "Are you <b>going to spell</b>?" }
    },
    "Spend": {
        presentSimple: { positive: "I <b>spend</b> time.", negative: "He <b>doesn't spend</b> money.", question: "Do you <b>spend</b> cash?" },
        past: { positive: "I <b>spent</b> the day.", negative: "He didn't <b>spend</b> much.", question: "Did you <b>spend</b> it?" },
        presentContinuous: { positive: "I am <b>spending</b> time.", negative: "He isn't <b>spending</b>.", question: "Are you <b>spending</b>?" },
        presentPerfect: { positive: "I have <b>spent</b> it all.", negative: "He hasn't <b>spent</b> a dime.", question: "Have you <b>spent</b> it?" },
        goingTo: { positive: "I am <b>going to spend</b> it.", negative: "He isn't <b>going to spend</b>.", question: "Are you <b>going to spend</b>?" }
    },
    "Steal": {
        presentSimple: { positive: "I never <b>steal</b>.", negative: "He <b>doesn't steal</b>.", question: "Do you <b>steal</b>?" },
        past: { positive: "He <b>stole</b> the money.", negative: "I didn't <b>steal</b> it.", question: "Who <b>stole</b> it?" },
        presentContinuous: { positive: "He is <b>stealing</b>.", negative: "They aren't <b>stealing</b>.", question: "Are you <b>stealing</b>?" },
        presentPerfect: { positive: "He has <b>stolen</b> it.", negative: "I haven't <b>stolen</b> anything.", question: "Have you <b>stolen</b>?" },
        goingTo: { positive: "He is <b>going to steal</b>.", negative: "They aren't <b>going to steal</b>.", question: "Are you <b>going to steal</b>?" }
    },
    "Swim": {
        presentSimple: { positive: "I <b>swim</b> fast.", negative: "He <b>doesn't swim</b>.", question: "Do you <b>swim</b>?" },
        past: { positive: "We <b>swam</b> yesterday.", negative: "He didn't <b>swim</b>.", question: "Did you <b>swim</b>?" },
        presentContinuous: { positive: "I am <b>swimming</b>.", negative: "He isn't <b>swimming</b>.", question: "Are you <b>swimming</b>?" },
        presentPerfect: { positive: "I have <b>swum</b> miles.", negative: "He hasn't <b>swum</b> here.", question: "Have you <b>swum</b> today?" },
        goingTo: { positive: "I am <b>going to swim</b>.", negative: "He isn't <b>going to swim</b>.", question: "Are you <b>going to swim</b>?" }
    },
    "Take": {
        presentSimple: { positive: "I <b>take</b> photographs.", negative: "He <b>doesn't take</b> sugar.", question: "Do you <b>take</b> cards?" },
        past: { positive: "I <b>took</b> the bus.", negative: "He didn't <b>take</b> it.", question: "Who <b>took</b> my pen?" },
        presentContinuous: { positive: "I am <b>taking</b> a break.", negative: "He isn't <b>taking</b> it.", question: "Are you <b>taking</b> notes?" },
        presentPerfect: { positive: "I have <b>taken</b> it.", negative: "He hasn't <b>taken</b> a photo.", question: "Have you <b>taken</b> a break?" },
        goingTo: { positive: "I am <b>going to take</b> it.", negative: "He isn't <b>going to take</b>.", question: "Are you <b>going to take</b>?" }
    },
    "Teach": {
        presentSimple: { positive: "I <b>teach</b> math.", negative: "He <b>doesn't teach</b> well.", question: "Do you <b>teach</b> here?" },
        past: { positive: "She <b>taught</b> me.", negative: "He didn't <b>teach</b> that.", question: "Who <b>taught</b> you?" },
        presentContinuous: { positive: "I am <b>teaching</b>.", negative: "He isn't <b>teaching</b>.", question: "Are you <b>teaching</b>?" },
        presentPerfect: { positive: "I have <b>taught</b> math.", negative: "He hasn't <b>taught</b>.", question: "Have you <b>taught</b> it?" },
        goingTo: { positive: "I am <b>going to teach</b>.", negative: "He isn't <b>going to teach</b>.", question: "Are you <b>going to teach</b>?" }
    },
    "Tell": {
        presentSimple: { positive: "I <b>tell</b> jokes.", negative: "He <b>doesn't tell</b> the truth.", question: "Do you <b>tell</b> stories?" },
        past: { positive: "I <b>told</b> him.", negative: "He didn't <b>tell</b> me.", question: "Did you <b>tell</b> her?" },
        presentContinuous: { positive: "I am <b>telling</b> you.", negative: "He isn't <b>telling</b> truths.", question: "Are you <b>telling</b> me?" },
        presentPerfect: { positive: "I have <b>told</b> you.", negative: "He hasn't <b>told</b> us.", question: "Have you <b>told</b> him?" },
        goingTo: { positive: "I am <b>going to tell</b> him.", negative: "He isn't <b>going to tell</b>.", question: "Are you <b>going to tell</b>?" }
    },
    "Think": {
        presentSimple: { positive: "I <b>think</b> so.", negative: "He <b>doesn't think</b> clearly.", question: "Do you <b>think</b> that?" },
        past: { positive: "I <b>thought</b> of it.", negative: "He didn't <b>think</b>.", question: "What did you <b>think</b>?" },
        presentContinuous: { positive: "I am <b>thinking</b>.", negative: "He isn't <b>thinking</b>.", question: "Are you <b>thinking</b>?" },
        presentPerfect: { positive: "I have <b>thought</b> about it.", negative: "He hasn't <b>thought</b>.", question: "Have you <b>thought</b>?" },
        goingTo: { positive: "I am <b>going to think</b>.", negative: "He isn't <b>going to think</b>.", question: "Are you <b>going to think</b>?" }
    },
    "Throw": {
        presentSimple: { positive: "I <b>throw</b> the ball.", negative: "He <b>doesn't throw</b> far.", question: "Do you <b>throw</b> away?" },
        past: { positive: "I <b>threw</b> it.", negative: "He didn't <b>throw</b> it.", question: "Who <b>threw</b> this?" },
        presentContinuous: { positive: "I am <b>throwing</b> it.", negative: "He isn't <b>throwing</b> up.", question: "Are you <b>throwing</b>?" },
        presentPerfect: { positive: "I have <b>thrown</b> it.", negative: "He hasn't <b>thrown</b>.", question: "Have you <b>thrown</b> it?" },
        goingTo: { positive: "I am <b>going to throw</b> it.", negative: "He isn't <b>going to throw</b>.", question: "Are you <b>going to throw</b>?" }
    },
    "Understand": {
        presentSimple: { positive: "I <b>understand</b> you.", negative: "He <b>doesn't understand</b>.", question: "Do you <b>understand</b>?" },
        past: { positive: "I <b>understood</b>.", negative: "He didn't <b>understand</b>.", question: "Did you <b>understand</b>?" },
        presentContinuous: { positive: "I am <b>understanding</b> better.", negative: "He isn't <b>understanding</b>.", question: "Are you <b>understanding</b>?" },
        presentPerfect: { positive: "I have <b>understood</b>.", negative: "He hasn't <b>understood</b>.", question: "Have you <b>understood</b>?" },
        goingTo: { positive: "I am <b>going to understand</b>.", negative: "He isn't <b>going to understand</b>.", question: "Are you <b>going to understand</b>?" }
    },
    "Wake": {
        presentSimple: { positive: "I <b>wake</b> up early.", negative: "He <b>doesn't wake</b> easily.", question: "Do you <b>wake</b> up?" },
        past: { positive: "I <b>woke</b> up.", negative: "He didn't <b>wake</b> me.", question: "When did you <b>wake</b>?" },
        presentContinuous: { positive: "I am <b>waking</b> up.", negative: "He isn't <b>waking</b> up.", question: "Are you <b>waking</b>?" },
        presentPerfect: { positive: "I have <b>woken</b> up.", negative: "He hasn't <b>woken</b> up.", question: "Have you <b>woken</b> him?" },
        goingTo: { positive: "I am <b>going to wake</b> up.", negative: "He isn't <b>going to wake</b>.", question: "Are you <b>going to wake</b>?" }
    },
    "Wear": {
        presentSimple: { positive: "I <b>wear</b> glasses.", negative: "He <b>doesn't wear</b> hats.", question: "Do you <b>wear</b> red?" },
        past: { positive: "I <b>wore</b> a suit.", negative: "He didn't <b>wear</b> it.", question: "What did you <b>wear</b>?" },
        presentContinuous: { positive: "I am <b>wearing</b> jeans.", negative: "He isn't <b>wearing</b> it.", question: "Are you <b>wearing</b> that?" },
        presentPerfect: { positive: "I have <b>worn</b> it.", negative: "He hasn't <b>worn</b> a tie.", question: "Have you <b>worn</b> this?" },
        goingTo: { positive: "I am <b>going to wear</b> it.", negative: "He isn't <b>going to wear</b>.", question: "Are you <b>going to wear</b>?" }
    },
    "Write": {
        presentSimple: { positive: "I <b>write</b> code.", negative: "He <b>doesn't write</b> letters.", question: "Do you <b>write</b> songs?" },
        past: { positive: "I <b>wrote</b> a book.", negative: "He didn't <b>write</b> me.", question: "Did you <b>write</b> this?" },
        presentContinuous: { positive: "I am <b>writing</b> now.", negative: "He isn't <b>writing</b>.", question: "Are you <b>writing</b>?" },
        presentPerfect: { positive: "I have <b>written</b> a book.", negative: "He hasn't <b>written</b> back.", question: "Have you <b>written</b> it?" },
        goingTo: { positive: "I am <b>going to write</b>.", negative: "He isn't <b>going to write</b>.", question: "Are you <b>going to write</b>?" }
    }
};
