class Calculator {
    constructor(displayElement) { 
        this.displayElement = displayElement
        this.displayContent=''
        this.clear()
    }    
    // Element : 요소 
    // display : 표시

    appendNumber(number) {
        this.displayContent += number
    }
    // 숫자를 추가하고 호출해주는 역할
    // this.displayContent = this.displayContent + number
    // 문자열에 " + " 기호의미는 문자열을 이어주라는 말입니다.

    appendOperator(operator) {            
        this.displayContent += operator
    }
    // 연산을 할 수 있게해주는 문장 없으면 +, -, *, / 를 사용할 수 없습니다.
   
    updateDisplay() {
        this.displayElement.value = this.displayContent
    }

    clear() {
        this.displayContent = ''
        this.displayElement.value = 0
    }

    compute() {
        this.displayContent = eval(this.displayContent
            .replace('\u00D7','*')
            .replace('\u00F7','/')
            )
            // \u00D7은 x \u00F7은 ÷ 를 의미합니다.
            //  x는 *로 ÷는 / 로 변경시켜주는 메서드
    }
}

const buttons = document.querySelectorAll('button')
const displayElement = document.querySelector('input')

const calculator = new Calculator(displayElement)

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':
                calculator.appendOperator(button.innerText)
                calculator.updateDisplay()
                break
// 클릭한 버튼이 연산자라면 calculator 클래스의 appendOperator 메서드를 추가한다는 의미입니다.
            case 'ac':
                calculator.clear()
                break
 // ac를 누르면 계산을 초기화시켜줍니다.
            case 'equals':
  // console.log('equals')
                calculator.compute()
                calculator.updateDisplay()
                break
            default:
                calculator.appendNumber(button.innerText)
                calculator.updateDisplay()
                break
        }
    })      
})
// " = " 이라는 버튼 클릭시 메서드 compute에 연결시켜줍니다.
        // calculator.appendNumber(button.innerText)
        // calculator.updateDisplay ()