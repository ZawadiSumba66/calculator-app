import operate from '../../logic/operate'


describe('operate',()=>{
    it('Adds two numbers when a plus is clicked on',()=>{
       const addition = operate('15','20','+')
       expect(addition).toEqual('35')
    })
    it('Multiplies two numbers when a X is clicked on',()=>{
        const multiply = operate('3','5','X')
        expect(multiply).toEqual('15')
     })
     it('subtracts two numbers when a - is clicked on',()=>{
        const sub = operate('7','5','-')
        expect(sub).toEqual('2')
     })
     it('divides two numbers when a / is clicked on',()=>{
        const sub = operate('8','2','/')
        expect(sub).toEqual('4')
     })
     it('percentifies the result when % is clicked on',()=>{
        const sub = operate('8','2','%')
        expect(sub).toEqual('0.16')
     })
})