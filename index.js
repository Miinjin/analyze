// using id & class values
const start = document.getElementById("start");
const contents1 = document.getElementById("contents1");
const contents2 = document.getElementById("contents2");
const contents3 = document.getElementById("contents3");
const contents4 = document.getElementById("contents4");
const contents5 = document.getElementById("contents5");
const contents6 = document.getElementById("contents6");
const contents7 = document.getElementById("contents7");
const load = document.getElementById("loading");
const result = document.getElementById("result");

var num, cnt = 0;
var type = '';
var desc = '';
var arr = ['start', 'contents1', 'contents2', 'contents3', 'contents4', 'contents5', 'contents6', 'contents7', 'load'];

// onclick change method
function change(id) {
    switch (id) {
        case start:
            if (start.style.display !== "none") {
                start.style.display = "none";
                contents1.style.display = "block";
            }
            break;

        case contents1:
            if (contents1.style.display !== "none") {
                contents1.style.display = "none";
                contents2.style.display = "block";
            }
            break;

        case contents2:
            if (contents2.style.display !== "none") {
                contents2.style.display = "none";
                contents3.style.display = "block";
            }
            break;

        case contents3:
            if (contents3.style.display !== "none") {
                contents3.style.display = "none";
                contents4.style.display = "block";
            }
            break;

        case contents4:
            if (contents4.style.display !== "none") {
                contents4.style.display = "none";
                contents5.style.display = "block";
            }
            break;

        case contents5:
            if (contents5.style.display !== "none") {
                contents5.style.display = "none";
                contents6.style.display = "block";
            }
            break;

        case contents6:
            if (contents6.style.display !== "none") {
                contents6.style.display = "none";
                contents7.style.display = "block";
            }
            break;

        case contents7:
            if (contents7.style.display !== "none") {
                contents7.style.display = "none";
                load.style.display = "block";

                // after 3s none-display div loading
                if (load.style.display !== "none") {
                    setTimeout(function () {
                        load.style.display = "none";
                    }, 3000);
                    // after 5s display div result
                    setTimeout(function () {
                        result.style.display = "block";
                        var final = num % 7;
                        switch (final) {
                            case 1:
                                type = '방전된 노트북';
                                desc = '이미 지쳤어… <br/>' + 
                                '해야할 것은 많지만 일이 손에 잡히지 않는<br/> 당신은 방전된 노트북 성향!<br/>' + 
                                '1퍼센트 남은 배터리로 꾸역꾸역 버티고 있어요.<br/>' + 
                                '완전히 방전되기 전에<br/> 심신을 환기할 수 있는 새로운 일을 찾고<br/> 재충전의 시간을 가지는 건 어떨까요?';
                                write(type, desc);
                                break;
                            case 2: 
                                type = '손잡이 빠진 문고리';
                                desc = '아무것도 할 수 없어…<br/>' +
                                '이미 고장나 버린 마음을 안고 살아가는<br/> 당신은 손잡이 빠진 문고리 성향!<br/>' + 
                                '많은 고민과 일들로 지쳤다면<br/> 잠깐 쉬어가는 건 어떨까요';
                                write(type, desc);
                                break;
                                // ok
                            case 3:
                                type = '날카로운 A4용지';
                                desc = '건드리지 마!<br/>' + 
                                '신경이 곤두서 있는 당신은<br/> 날카로운 A4용지 성향!<br/>' + 
                                '주변에서 가만두질 않아서<br/> 다소 예민한 상태에요.<br/>' + 
                                '마음의 여유가 부족해서 그럴 수도 있으니<br/> 조금은 숨을 돌릴 시간을 가져보는 것도 좋아요!';
                                write(type, desc);
                                break;
                            case 4:
                                type = '아스팔트 위에 핀 민들레';
                                desc = '묵묵히 자신의 일을 해내요.<br/>' + 
                                '주목받지 않지만 궂은 일도 꿋꿋이 해내는<br/> 당신은 아스팔트 위에 핀 민들레 성향!' + 
                                '<br/>가끔은 주변에서 이런 모습을 알아주길 바라지만 그렇지 않아도 크게 개의치 않아요.<br/>' + 
                                '착실한 지금의 삶도 좋지만<br/> 가끔은 새로운 자극을 찾아보는 건 어떨까요?';
                                write(type, desc);
                                break;
                            case 5:
                                type = '자유로운 길고양이';
                                desc = '주변에서 뭐라하건 신경쓰지 않아요.<br/>' +
                                '원하는 것을 찾아 유유자적 떠도는<br/> 당신은 자유로운 길고양이 성향!<br/>' +
                                '호기심이 많아서 이것저것 도전을 많이해요.<br/>' +
                                '흥미있는 일에는 누구보다 열정적이지만<br/> 관심이 없으면 눈길도 주지 않아요.<br/>' +
                                '하나 정도 꾸준히 할 수 있는<br/> 무언가를 찾아보면 어떨까요?';
                                write(type, desc);
                                break;
                            case 6:
                                type = '여유로운 개미';
                                desc = '남들이 일할 시간에 이미 쉬고 있는<br/> 당신은 여유로운 일개미 성향!<br/>' +
                                '일이 눈 앞에 쌓여 있는 걸 견딜 수 없어서<br/> 얼른 하고 치워버려요.<br/>' + 
                                '하지만 그래서 가끔 작은 실수도 있답니다.<br/>' +
                                '조금은 천천히 하는 습관을 들여보면 어떨까요?';
                                write(type, desc);
                                break;
                            case 0:
                                type = '말랑 폭신한 마시멜로우';
                                desc = '아무래도 좋아~<br/>' +
                                '세상 모든 것을 다 품을 수 있는<br/> 넓은 마음을 가진 당신은<br/> 말랑 폭신한 마시멜로우 성향!<br/>' +
                                '크게 신경 쓰는 일이 잘 없고<br/> 남이 하자는 대로 잘 따르는 편이에요.<br/>' + 
                                '하지만 그래서 콕 찔려버릴 수도 있으니<br/> 조금은 단단해 지는 것도 필요할지 몰라요.';
                                write(type, desc);
                                break;
                            default:
                                alert('Error!');
                                break;
                        }
                    }, 3000);
                }
            }

            break;

        default:
            alert('Error!');
    }
}

// save chosen buttons value
function save(v) {
    num = num + v;
}

function shareTwitter() {
    var sendText = "Analyze: 당신의 상태 분석"; // 전달할 텍스트
    var sendUrl = "https://miinjin.github.io/analyze/"; // 전달할 url
    window.open("https://twitter.com/intent/tweet?text=" + sendText + "&url=" + sendUrl);
}

function clip() {
    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("URL이 복사되었습니다.")
}

function write(t, d) {
    result.innerHTML = "<h2>"+t+"</h2>" + "<p>"+d+"</p>" + "<button id=\"share\"type=\"button\" onclick=\"clip(); return false;\">공유하기</button>"
}