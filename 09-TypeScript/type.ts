/*
let a: string //变量a只能存储字符串
let b: number //变量a只能存储数值
let c: boolean //变量a只能存储布尔值
a = 'hello'
a = 100 //警告：不能将类型“number”分配给类型“string”
b = 666
b = '你好'//警告：不能将类型“string”分配给类型“number”
c = true
c = 666 //警告：不能将类型“number”分配给类型“boolean”
// 参数x必须是数字，参数y也必须是数字，函数返回值也必须是数字
function demo(x:number,y:number):number{
    return x + y
}
demo(100,200)
demo(100,'200') //警告：类型“string”的参数不能赋给类型“number”的参数
demo(100,200,300) //警告：应有 2 个参数，但获得 3 个
demo(100) //警告：应有 2 个参数，但获得 1 个

let d = -99 //TypeScript会推断出变量d的类型是数字
d = false //警告：不能将类型“boolean”分配给类型“number”

// Person（抽象类）
abstract class Person { }
// Teacher类继承Person
class Teacher extends Person {
// 构造器
    constructor(name: string,age: number){
        super(name,age)
    }
// ⽅法
    speak(){
        console.log('你好！我是⽼师:',this.name)
    }
}
// Student类继承Person
class Student extends Person { }
// Person实例
// const p1 = new Person('周杰伦',38) // 由于Person是抽象类，所以此处不可以new Person的实例对象
*/
