const chapterElement = document.getElementById('chapter');

const bhagavadChapter = async () => {
    try {
        const response = await fetch('https://bhagavadgitaapi.in/chapters');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("data", data);
        data.forEach(chapter => { 
            const { chapter_number, name, meaning, summary, translation, transliteration, verses_count } = chapter;
            chapterElement.innerHTML += `
                <div>
                    <h3>Chapter ${chapter_number}: ${name}</h3>
                    <p><strong>Meaning: </strong> ${meaning.en}<br>${meaning.hi}</p>
                    <p><strong>Summary:</strong> ${summary.en}<br>${summary.hi}</p>
                    <p><strong>Translation:</strong> ${translation}</p>
                    <p><strong>Transliteration:</strong> ${transliteration}</p>
                    <p><strong>Verses_count:</strong> ${verses_count}</p>
                </div>
            `;
        });
    } catch (err) {
        console.log("error...", err);
    }
}

bhagavadChapter();

//ch
const ch = document.getElementById('ch');

const bhagavadShlokChapter = async (chapterNumber) => {
    try {
        const response = await fetch(`https://bhagavadgitaapi.in/chapter/${chapterNumber}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log("data", data);

        const { chapter_number, name, meaning, summary, translation, transliteration, verses_count } = data;
        ch.innerHTML = `
            <div>
                <h3>Chapter ${chapter_number}: ${name}</h3>
                <p><strong>Meaning (English):</strong> ${meaning.en}</p>
                <p><strong>Meaning (Hindi):</strong> ${meaning.hi}</p>
                <p><strong>Summary (English):</strong> ${summary.en}</p>
                <p><strong>Summary (Hindi):</strong> ${summary.hi}</p>
                <p><strong>Translation:</strong> ${translation}</p>
                <p><strong>Transliteration:</strong> ${transliteration}</p>
                <p><strong>Verses Count:</strong> ${verses_count}</p>
            </div>
        `;
    } catch (err) {
        console.error("Error:", err);
    }
}
bhagavadShlokChapter(5);


   



    