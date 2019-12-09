//判断是否有ll字符串
var ll='ll';
var say='a girl  say hi!';
document.write(say.includes(ll));
document.write(say.startsWith(ll));
console.log("*************************");
let a=222;
let b=333;
let result=a+b;
document.write(result);//运算

let color='red';
let food=`${color} apple`;
document.write(food);//字符串拼接

let c=99/3;
console.log(Number.isFinite(c));
console.log(Number.isFinite('ll'));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(undefined));
console.log("*************************");

let arr1=[1,2,3,4,1,5,6,7,8,888];
var i=arr1.findIndex((value)=>value>4);
console.log(i);
console.log("*************************");

// for…of数组索引
let arr2=['ll','moon','hah'];
for (let item of arr2){
    console.log(item);
}
console.log("*************************");

// 同时输出数组的内容和索引：我们用entries()这个实例方法，配合我们的for…of循环
let arr3=['ll','moon','hah'];
for(let [index,val] of arr3.entries()){
    console.log(index+':'+val);
}
console.log("*************************");
//entries方法 切分数组
let arr4=['ll','moon','hah'];
let list1=arr4.entries();
console.log(list1);
console.log(list1.next().value);
console.log(list1.next().value);
console.log(list1.next().value);
console.log("*************************");

//默认值 ES6箭头函数
var add1=(q,w=2)=>q+w;
console.log(add1(8));

var add2=(e,r=3)=>{
    console.log("hah")
    return e+r;
}
console.log(add2(2));
console.log("*************************");
//ES5中的写法
// // 'use strict'
// function add(a,b=2){
//     // 'use strict'
//     if(a === 0){
//         throw new Error('This is error');
//     }
//     return a+b;
// }
// console.log(add(1))
// console.log(add.length);
// 此处获得的参数的个数是必须传递参数的个数，如果有默认自则不计入其内
// 有严谨模式‘use strict’函数有默认值的时候是不行的
// function add(a,b){
//     // 'use strict'
//     return a+b;
// }
// console.log(add.length);
//这时控制台打印出了2，但是如果我们去掉严谨模式，并给第二个参数加上默认值的话，这时候add.length的值就变成了1， 也就是说它得到的是必须传入的参数。
// // 此处获得的参数的个数是必须传递参数的个数，如果有默认自则不计入其内
console.log("*************************");
//对象的函数解构 json
let s=undefined;
function fun0(s=5222) {
    console.log(s);
}
fun0(s);
console.log("*************************");
// 对象的函数解构
let json={
    aa:'ll',
    bb:undefined
};
function  fun2({aa,bb='ss'}) {
    console.log(aa,bb);
}
fun2(json);

console.log("*************************");
//数组的函数解构
let arr5=['llll','hah','gg'];
function fun3(z,x,c,v) {
    console.log(z,x,c,v)
}
fun3(...arr5);//？
console.log("*************************");

// in的用法
let obj={
    o:'ll',
    p:'haha'
};
console.log('op' in obj);//op指key

console.log("*************************");
// 数组判断
let arr6=[,,,,,];
console.log(arr6.length);//5
console.log(arr6[0]);//undefined
console.log(0 in arr6);//false
// 注意：这里的0指的是数组下标位置是否为空。
let arr7=['ll','kk'];
console.log(0 in arr7);//true
// 数组遍历 forEach
let arr8=['ll','kk','tt'];
arr8.forEach((val,index)=>console.log(index,val));//有索引
// 数组遍历 some
let arr9=['ll','kk','pp'];
arr9.some(x=>console.log(x));//无索引
// 数组遍历 map替换
let aee=['ll','jj','oo'];
console.log(aee.map(x=>'web'));//将数组内三个字符串都替换为 web
// 数组转换成字符串
let aee1=['pp','ll','kk'];
console.log(aee1.toString());
console.log("*************************");

// 对象
// 对象赋值
let name='ll';
let skill='sing';
var obj1={name,skill};
console.log(obj1);
// key值的构建
let key1='skill';
var obj2={
    [key1]:'run'
};
console.log(obj2.skill);
//自定义对象方法
let obj3={
    add:function (f,g) {
        return f+g;
    }
};
console.log(obj3.add(44,33));

console.log("*************************");
// Object.is( ) 对象比较
// is()
let obj4={name1:'jj'};
let obj5={name1:'jj'};
console.log(obj4.name1===obj5.name1);
console.log(Object.is(obj4.name,obj5.name));
console.log("*************===同值相等 is严格相等************");
// ===同值相等 is严格相等
console.log(+0===-0);
console.log(Object.is(+0,-0));

console.log(NaN===NaN);
console.log(Object.is(NaN,NaN));
//assign
let h={h:'haha'};
let f={f:'xixi'};
let d={d:'oh!!'};
let u=Object.assign(h,f,d);
console.log(u);


// Symbol  ES6新增的

// Symbol的打印

// Symbol在对象中的应用

//Symbol对象元素的保护作用

// set的声明
let setArr=new Set(['mm','nn','bb']);
setArr.add('is a family');
console.log(setArr);
// Set值的增删改
// setArr.clear();//删除全部
setArr.delete('nn');//删除一个
console.log(setArr);
//循环输出
//for...of
for (let item1 of setArr){
    console.log(item1);
}
// forEach
console.log('-----forEach----');
setArr.forEach((value)=>console.log(value));
// size属性  size属性可以获得Set值的数量。
console.log(setArr.size);
//WeakSet的声明  这块有个坑，如果则会输出两遍obj的值
let weakObj=new WeakSet();
let obj6={s:'vv',b:'dd'};
let obj7=obj6;
weakObj.add(obj7);
console.log(weakObj);//?

console.log('-----map数据类型----');
//map数据类型
// json
let json1={
    name3:'pp',
    skill:'run'
};
console.log(json1.name3);
// =>
let json2={
    name3:'ll',
    skill:'run'
};
var map=new Map();
map.set(json2,"I'm");//key值:json2  value值:"I'm"  >>>key值可以是任何形式
map.set('kk',json2);//key值:'kk' value值:json2
console.log(map);
console.log('-----map增删查----');
//map增删查
//get 取值
console.log(map.get('kk'));
console.log(map.get(json2));
// delete 删除特定的值
map.delete(json2);
console.log(map);
// clear 删除全部的值
// map.clear();
console.log(map);
//size
console.log(map.size);
//has
console.log(map.has('kk'));

//proxy 代理 ES6 增强 对象和函数(方法) 生命周期 预处理
console.log('-----proxy 代理 ES6 增强 对象和函数(方法) 生命周期 预处理----');



const employee = {
    firstName: 'liu',
    lastName: 'lu'

};
console.group('employee');//开始
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.org);//undefined
console.log(employee.fullName);//undefined
console.groupEnd();//结束
let handler={
    get:function (target,fieldName) {
        if (fieldName==='fullName') {
            return `${target.firstName} ${target.lastName}`;
        }
        return fieldName in target?
            target[fieldName]:
            `No such property as, '${fieldName}'!`

    }
};
let p=new Proxy(employee,handler);
console.group('proxy');
console.log(p.firstName);
console.log(p.lastName);
console.log(p.org);//org是fieldName
console.log(p.fullName);
console.groupEnd();
console.log("---------------改变set方法----------------");
// 改变set方法来实现一个验证的例子：新建一个handler，重新命名为validator
const validator= {
    set: function (obj1, prop1, value1) {
        if (prop1 === 'age') {
            if (!Number.isInteger(value1)) {
                throw new TypeError('The age is not an integer!');
            }
            if (value1< 0) {
                throw new TypeError('This is insane, a negative age?');

            }
        }
        // 对于满足条件的 age 属性以及其他属性，直接保存
        obj1[prop1]=value1;
    }
};
let pr=new Proxy(employee,validator);
pr.age=10;//保存
// pr.age = -11;// 然后尝试设置一个不合法的属性
console.log("---------get set----------------------");

var pro = new Proxy({
    add1:function (val) {
        return val+100
    },
    name1:"i'm a cat"
},
    {
    //get
    // target: 表示所要拦截的目标对象（对象、数组、函数等都可以）
    // handler：也是一个对象，用来定制拦截行为

// get(target, prop, receiver) 拦截对象属性的读取操作
// target： 目标对象
// prop(key)：属性名
// receriver(property): proxy实例本身(可选参数)

//     get:function (target,key,property) {
//         console.log('come in Get!');
//         return target[key];
//     },
//     }
// );
// console.log(pro.name1);
// console.log(pro.add1("oo"));
//    set
    set: function (target2, key2, value2, recriver2) {
        console.log(`setting${key2}=${value2}`);//target=pro key=name0  value=1900
        return target2[key2] = value2 + '222';
    }
});
pro.name0='1900';
console.log(pro.name0);

console.log("---------apply的使用----------------------");
// apply的使用
// apply方法可接受三个参数，分别是
// 目标对象，目标对象的上下文对象（this），目标对象的参数数组。
let target3=function () {
    return "i'm a beautiful girl!";
    return val6+=100;
};
let handler3={
  apply(target3,ctx,args){
      console.log('do apply');
      return Reflect.apply(...arguments);
  }
};
let pro6=new Proxy(target3,handler3);
console.log(pro6());//?



console.log("---------promise----------------------");
//promise es5 回调地狱
let state=1;
function  step1(resolve,reject) {
    console.log('1.开始-洗菜做饭');
    if(state==1){
        resolve('洗菜做饭完成')
    }else{
        reject('洗菜做饭-错误')
    }
}

function step2(resolve,reject) {
    console.log('2.开始-坐下来吃饭');
    if(state==1){
        resolve('坐下来吃饭')
    }else{
        reject('坐下来吃饭-错误')
    }
}
function step3(resolve,reject){
    state = 0;
    console.log('3.开始-收拾桌子');
    if(state==0){
        resolve('收拾桌子')
    }else{
        reject('收拾桌子-错误')
    }
}
new Promise(step1).then(function(val){
        console.log(val);
    return new Promise(step2);
}).then(function(val){
    console.log(val);
    return new Promise(step3);
}).then(function(val){
    console.log(val);
});

// class 类
//类的声明
class Coder {
    name7(val7) {
        console.log(val7);
        return val7;
    }

//  let kk=new Coder();
//  kk.name7('KK');
//  skill(val7){
//     console.log(this.name7('KK')+':'+'skill-'+val7);
// }
// 类的传参
constructor(pp,ss) {
    this.pp = pp;
    this.ss = ss;

    add0()
    {
        return this.pp + this.ss;
    }
}}
console.log()
// 类的继承
class htmler extends Coder{

}
let llDev=new htmler;
llDev('liulil');

// 模块化
// import 引入  export 输出



