let items = [
{
    "id":0,
    "func":"input",
    "type":"text",
    "q":"5+5*5=?",
    "answ":"30"
},
{
    "id":1,
    "func":"input",
    "type":"number",
    "q":"8*8-10=?",
    "answ":"54"
},
{
    "id":2,
    "func":"input",
    "type":"radio",
    "q":"2^4=?",
    "answ":"16",
    "variant":[8, 16, 32]
},
{
    "id":3,
    "func":"select",
    "type":"select",
    "q":"5*10/2=?",
    "answ":"25",
    "variant":["Выберите ответ", 25, 30, 60, 15]
}
];
function onLoad(){
    var MT = document.getElementById("M_T");

    var p, h1, h2, inp;

    for(let i = 0; i<items.length; i++){

        p = document.createElement("p");
        h1 = document.createElement("h1");
        h2 = document.createElement("h2");
        h1.className = "qustion";
        h2.className = "q_text";
        inp = document.createElement("input");

        switch(items[i].type){
            case "text":
                h1.textContent = "Вопрос "+(items[i].id)+":";
                h2.textContent = items[i].q;

                inp = document.createElement("input");
                inp.type = "text";
                inp.className = "answer";
                inp.id = "ans_"+items[i].id;
                inp.placeholder = "Введите ответ";

                p.append(h1, h2, inp);
                MT.append(p);
            break;
            case "number":
                h1.textContent = "Вопрос "+(items[i].id)+":";
                h2.textContent = items[i].q;

                inp = document.createElement("input");
                inp.type = "number";
                inp.className = "answer";
                inp.id = "ans_"+items[i].id;
                inp.placeholder = "Введите ответ";

                p.append(h1, h2, inp);
                MT.append(p);
            break;
            case "radio":
                h1.textContent = "Вопрос "+(items[i].id)+":";
                h2.textContent = items[i].q;
                p.append(h1, h2);

                for(let j=0; j<items[i].variant.length; j++){
                    inp = document.createElement("input");
                    inp.type = "radio";
                    inp.className = "radio_answer";
                    inp.id = "ans_"+toString(items[i].id)+"_"+j;
                    inp.name = "answer";
                    inp.value = items[i].variant[j];
                    let h = document.createElement("h2");
                    h.innerHTML = "<input type='radio' class='radio_answer' name='answer' value='"+items[i].variant[j]+"'/>"+items[i].variant[j];
                    p.append(h);
                }
                MT.append(p);
            break;
            case "select":
                h1.textContent = "Вопрос "+(items[i].id)+":";
                h2.textContent = items[i].q;
                inp = document.createElement("select");
                inp.id = "ans_"+items[i].id;;
                inp.className = "answer";

                for(let j = 0; j<items[i].variant.length; j++){
                
                var option = document.createElement("option");
                option.value = items[i].variant[j];
                option.text = items[i].variant[j];
                inp.add(option);
                }

                p.append(h1, h2, inp);
                MT.append(p);
            break;
        }
    }
}


function check(){
    var answ = [];
    var inp = document.getElementById("ans_0");
    answ.push(inp.value);

    inp = document.getElementById("ans_1");
    answ.push(inp.value);

    inp = document.getElementsByName("answer");
    for (i = 0; i < inp.length; i++) {
        if (inp[i].checked){
            answ.push(inp[i].value);
        }
    }
    inp = document.getElementById("ans_3");
    answ.push(inp.value);

    console.log(answ);

    var count = 0;
    for(i=0; i<items.length; i++){
        if(items[i].answ===answ[i]){
            count+=25;
            console.log(items[i].answ, answ[i])
        }
    }
    console.log(count);

    var MT = document.getElementById("M_T");
    MT.innerText="";
    var p, h;
    p = document.createElement("p");
    h = document.createElement("h2");
    h.className = "q_text";
    h.textContent = "Количество правильных ответов: " + count +"%.";
    
    p.append(h);
    MT.append(p);

    var FT = document.getElementById("F_T");
    FT.innerText = "";
    var btn = document.createElement("button");
    btn.className = "send_btn";
    btn.textContent = "Начать заново";
    btn.addEventListener('click', () => {
        reset();
      })

    FT.append(btn);

}

function reset(){
    location.reload();
}
/*
                <p>
                    <h1 class="qustion">Вопрос 1:</h1>
                    <h2 class="q_text">5+5*5=?</h2>
                    <input type="text" class="answer" id="ans_1" placeholder="Введите ответ"></input>
                </p>
                <p>
                    <h1 class="qustion">Вопрос 2:</h1>
                    <h2 class="q_text">8*8-10=?</h2>
                    <input type="number" class="answer" id="ans_2" placeholder="Введите ответ"></input>
                </p>
                <p>
                    <h1 class="qustion">Вопрос 3:</h1>
                    <h2 class="q_text">2^4=?</h2>
                    <h2><input type="radio" class="radio_answer" name="answer" value="8"/>8</h2>
                    <h2><input type="radio" class="radio_answer" name="answer" value="16"/>16</h2>
                    <h2><input type="radio" class="radio_answer" name="answer" value="32"/>32</h2>
                </p>
                <p>
                    <h1 class="qustion">Вопрос 4:</h1>
                    <h2 class="q_text">5*10/2=?</h2>
                    <select class="answer" id="ans_4">
                        <option value="none">Выберите ответ</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="60">60</option>
                        <option value="15">15</option>
                    </select>
                </p>
*/