const questions1 = [
    {
        question : "Kamu tiba di desa kecil yang ramai dengan festival.",
        answer: {
            I: {
                text : "Memilih sudut yang tenang di kafe kecil, mengamati orang-orang dari kejauhan sambil menikmati secangkir teh.",
                score : { I: +1, E: 0 },
            },
            E: {
                text : "Menikmati keramaian, berinteraksi dengan banyak orang dan bergabung dalam perayaan.",
                score : { I: 0, E: +1 },
            },
        },
    },
    {
        question : "Setelah festival, seorang penduduk desa mengajakmu untuk menghadiri pesta malam. ",
        answer: {
            I: {
                text : "Menolak dengan sopan, lebih memilih malam yang tenang untuk merenung dan beristirahat.",
                score : { I: +1, E: 0 },
            },
            E: {
                text : "Setuju dan bergabung, merasa senang bisa bertemu lebih banyak orang baru.",
                score : { I: 0, E: +1 },
            },
        },
    },
    {
        question : "Keesokan harinya, kamu memiliki waktu luang untuk menjelajah.",
        answer: {
            I: {
                text : "Memilih berjalan sendirian di sepanjang sungai, menikmati ketenangan dan kesendirian.",
                score : { I: +1, E: 0 },
            },
            E: {
                text : "Mengajak sekelompok penduduk desa untuk menjelajah bersama, menikmati kebersamaan dan cerita-cerita mereka.",
                score : { I: 0, E: +1 },
            },
        },
    },
    {
        question : "Saat menjelajah, kamu menemukan peta kuno yang menunjukkan tempat tersembunyi.",
        answer: {
            N: {
                text : "Tertarik pada simbol-simbol dan makna tersembunyi di peta, membayangkan petualangan besar yang menunggu.",
                score : { N: +1, S: 0 },
            },
            S: {
                text : "Fokus pada detail peta dan mencari cara paling efisien untuk mencapai tempat tersebut.",
                score : { N: 0, S: +1 },
            },
        },
    },
    {
        question : "Di perjalanan, kamu menemukan reruntuhan kuno.",
        answer: {
            N: {
                text : "Membayangkan cerita dan sejarah di balik reruntuhan tersebut, mencoba memahami makna di baliknya.",
                score : { N: +1, S: 0 },
            },
            S: {
                text : "Mengamati detail arsitektur dan mencari petunjuk fisik yang mungkin tersembunyi di reruntuhan.",
                score : { N: 0, S: +1 },
            },
        },
    },
    {
        question : "Kamu bertemu dengan seorang penjaga hutan yang menawarkan dua jalan: satu penuh tantangan dengan pemandangan indah, yang lain lebih mudah tapi kurang menarik.",
        answer: {
            N: {
                text : "Memilih jalan yang penuh tantangan, tertarik pada pengalaman dan kemungkinan baru.",
                score : { N: +1, S: 0 },
            },
            S: {
                text : "Memilih jalan yang penuh tantangan, tertarik pada pengalaman dan kemungkinan baru.",
                score : { N: 0, S: +1 },
            },
        },
    },
    {
        question : "Di tengah perjalanan, kamu menemukan desa yang sedang menghadapi masalah besar.",
        answer: {
            T: {
                text : "Menganalisis situasi dan menawarkan solusi logis untuk mengatasi masalah tersebut.",
                score : { T: +1, F: 0 },
            },
            F: {
                text : "Mendengarkan dengan empati dan mencoba memahami perasaan penduduk desa sebelum mengambil tindakan.",
                score : { T: 0, F: +1 },
            },
        },
    },
    {
        question : "Kamu diberi pilihan untuk menyelamatkan satu dari dua tempat penting di desa: perpustakaan yang penuh pengetahuan atau taman tempat warga berkumpul.",
        answer: {
            T: {
                text : "Memilih menyelamatkan perpustakaan, menghargai pentingnya pengetahuan dan informasi.",
                score : { T: +1, F: 0 },
            },
            F: {
                text : "Memilih menyelamatkan taman, memahami pentingnya kebahagiaan dan kebersamaan bagi warga.",
                score : { T: 0, F: +1 },
            },
        },
    },
    {
        question : "Seorang anak kecil meminta bantuanmu untuk menemukan hewan peliharaannya yang hilang.",
        answer: {
            T: {
                text : "Segera membuat rencana pencarian yang efektif dan menyeluruh.",
                score : { T: +1, F: 0 },
            },
            F: {
                text : "Menenangkan anak tersebut, menjelaskan bahwa kamu akan melakukan yang terbaik untuk menemukan hewan peliharaannya.",
                score : { T: 0, F: +1 },
            },
        },
    },
    {
        question : "Setelah beberapa hari, kamu memutuskan untuk meninggalkan desa dan melanjutkan perjalanan.",
        answer: {
            J: {
                text : "Membuat rencana perjalanan.",
                score : { J: +1, P: 0 },
            },
            P: {
                text : "Memilih pergi tanpa rencana dan menikmati kebebasan.",
                score : { J: 0, P: +1 },
            },
        },
    },
    {
        question : "Di perjalanan, kamu menghadapi situasi tak terduga: badai besar menghalangi jalanmu.",
        answer: {
            J: {
                text : "Cepat-cepat mencari tempat berlindung dan menunggu badai reda untuk melanjutkan perjalanan.",
                score : { J: +1, P: 0 },
            },
            P: {
                text : "Menikmati tantangan dan mencari cara untuk melanjutkan perjalanan meski ada badai.",
                score : { J: 0, P: +1 },
            },
        },
    },
    {
        question : "Akhirnya, kamu mencapai tujuan akhir dari petualanganmu. ",
        answer: {
            J: {
                text : "Merasa puas karena telah mencapai tujuan yang direncanakan.",
                score : { J: +1, P: 0 },
            },
            P: {
                text : "Merasa gembira karena perjalanan penuh kejutan.",
                score : { J: 0, P: +1 },
            },
        },
    },
];

const questions2 = [
    {
        question : "You arrive in a small village bustling with a festival.",
        answer: {
            I: {
                text : "Find a quiet corner in a small café, observing people from afar while enjoying a cup of tea?.",
                score : { I: +1, E: 0 },
            },
            E: {
                text : "Enjoy the crowd, interact with many people, and join the celebration.",
                score : { I: 0, E: +1 },
            },
        },
    },
    {
        question : "After the festival, a villager invites you to a nighttime party.",
        answer: {
            I: {
                text : "Politely decline, preferring a quiet evening to reflect and rest.",
                score : { I: +1, E: 0 },
            },
            E: {
                text : "Agree and join in, excited to meet more new people.",
                score : { I: 0, E: +1 },
            },
        },
    },
    {
        question : "The next day, you have some free time to explore. ",
        answer: {
            I: {
                text : "Invite a group of villagers to explore with you, enjoying their company and stories.",
                score : { I: +1, E: 0 },
            },
            E: {
                text : "Choose to walk alone along the river, enjoying the peace and solitude.",
                score : { I: 0, E: +1 },
            },
        },
    },
    {
        question : "While exploring, you find an ancient map showing a hidden place.",
        answer: {
            N: {
                text : "Get intrigued by the symbols and hidden meanings on the map, imagining the great adventure that awaits.",
                score : { N: +1, S: 0 },
            },
            S: {
                text : "Focus on the map's details and look for the most efficient way to reach the place.",
                score : { N: 0, S: +1 },
            },
        },
    },
    {
        question : "On your journey, you come across ancient ruins.",
        answer: {
            N: {
                text : "Imagine the stories and history behind the ruins, trying to understand their deeper meaning.",
                score : { N: +1, S: 0 },
            },
            S: {
                text : "Observe the architectural details and look for physical clues that might be hidden in the ruins.",
                score : { N: 0, S: +1 },
            },
        },
    },
    {
        question : "You meet a forest ranger who offers you two paths: one is challenging with beautiful views, the other is easier but less interesting.",
        answer: {
            N: {
                text : "Choose the challenging path, excited about the experience and new possibilities.",
                score : { N: +1, S: 0 },
            },
            S: {
                text : "Choose the easier path, appreciating comfort and practicality.",
                score : { N: 0, S: +1 },
            },
        },
    },
    {
        question : "During your journey, you find a village facing a big problem.",
        answer: {
            T: {
                text : "Analyze the situation and offer logical solutions to tackle the problem.",
                score : { T: +1, F: 0 },
            },
            F: {
                text : "Listen with empathy and try to understand the villagers' feelings before taking action.",
                score : { T: 0, F: +1 },
            },
        },
    },
    {
        question : "You're given a choice to save one of two important places in the village: a library full of knowledge or a park where people gather.",
        answer: {
            T: {
                text : "Choose to save the library, valuing the importance of knowledge and information.",
                score : { T: +1, F: 0 },
            },
            F: {
                text : "Choose to save the park, understanding the importance of happiness and community for the villagers.",
                score : { T: 0, F: +1 },
            },
        },
    },
    {
        question : "A small child asks for your help to find their lost pet.",
        answer: {
            T: {
                text : "Quickly create an effective and thorough search plan",
                score : { T: +1, F: 0 },
            },
            F: {
                text : "Comfort the child, explaining that you will do your best to find their pet.",
                score : { T: 0, F: +1 },
            },
        },
    },
    {
        question : "After a few days, you decide to leave the village and continue your journey.",
        answer: {
            J: {
                text : "Make a detailed travel plan with a clear schedule and destinations.",
                score : { J: +1, P: 0 },
            },
            P: {
                text : "Choose to go without a set plan, following your intuition and enjoying the freedom.",
                score : { J: 0, P: +1 },
            },
        },
    },
    {
        question : "On your journey, you face an unexpected situation: a big storm blocking your path.",
        answer: {
            J: {
                text : "Quickly seek shelter and wait for the storm to pass according to plan.",
                score : { J: +1, P: 0 },
            },
            P: {
                text : "Embrace the challenge and look for creative ways to continue your journey despite the storm",
                score : { J: 0, P: +1 },
            },
        },
    },
    {
        question : "Finally, you reach the end of your adventure.",
        answer: {
            J: {
                text : "Feel satisfied for having reached the planned destination and start thinking about the next adventure with careful planning.",
                score : { J: +1, P: 0 },
            },
            P: {
                text : "Feel thrilled because the journey was full of surprises and spontaneity.",
                score : { J: 0, P: +1 },
            },
        },
    },
];

const resultOptions = {
    "INTP" : {
        image: "1DE.png"
    }
}

let currentQuestion = 0;

let language = "indonesia";

function displayQuestion() {
    const quizElement = document.getElementById('quiz');
    if (language == "indonesia") {
        const question = questions1[currentQuestion];
    } else {
        const question = questions2[currentQuestion];
    }
    if (question) {
        let html = `<p>${question.question}</p>`;
        if (question.image) {
            html += `<img src="${question.image}" alt"Question ${currentQuestion + 1}">`;
        }
        for (const option in question.answer) {
            html += `<button class="large-rectangular" value="${option}"> id="${option}">${question.answers[option].text}</button>`
        }
        quizElement.innerHTML = html;
        attachButtonClickHandlers();
    }
}

document.getElementById('start-button').addEventListener('click', function(){
    document.getElementById('start-page').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
    currentQuestion = 0;
    userAnswers = {};
    currentQuestion();
});

function attachButtonClickHandlers() {
    const choiceButtons = document.querySelectorAll('.large-rectangular');
    choiceButtons.forEach((button) => {
        button.addEventListener('click', handleAnswer);
    });
}

function handleAnswer(event) {
    const selectedOption = event.target;
    const answerKey = selectedOption.value;
    const question = questions[currentQuestion];
    const answer = question.answer[answerKey];

    for (const dimension in answer.scores) {
        userAnswer[dimension] = (userAnswer[dimension] || 0)+ answer.scores[dimention];
    }

    if (currentQuestion < question.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    const resultTextContainer = document.querySelector('.result-text');
    const resultImage = document.getElementById('result-image');
    const topLetters = {};

    const pairs = ["IE", "NS", "TF", "PJ"];
    pairs.forEach(pair => {
        const options = pair.split('');
        const scores = options.map(option => userAnswers[option] || 0);
        const topOptionIndex = scores.indexOf(Math.max(...score));
        const topOption = options[topOptionIndex];
        topLetters[pair] = topOption;
    });

    const personalityData = resultOptions[result];
    if (personalityData) {
        resultTextContainer.innerHTML = `
        `;

        resultImage.src = "images/"+personalityData.image;
        resultImage.alt = `${personalityData.image} Image`;
    }

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'bloct';
}