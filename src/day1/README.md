#### TypeScript 学习第一天心得

- 全局安装 TypeScript。
- 使用 tsc 命令编译 ts 文件得到 js 文件使用。
- interface 关键字定义一个对象类型的集合。
- class 关键字定义个一个类的类型集合。（也可以写逻辑）
- 可以在函数形参上定义类型。如果实参类型错误，tsc 命令编译会报错。
  
#### 基础类型
- 布尔值
    ```javascript
    let isSuccess : boolean = true;
    ```
- 数字
  - 支持多种数字类型
  - 比如：10进制、16进制、2进制、8进制、浮点数
   ```typescript
    let decLiteral : number = 231;
    let hexLiteral : number = 0xf00d;
    let binaryLiteral : number = 0b1010;
    let octalLiteral : number = 0o744;
    let floatLiteral : number = 1.2312;
   ``` 
- 字符串
  - 可以使用字符串模板
  ```typescript
    let name:string = '李阳';
    let normal:string = 'Hello World';
    let templateString:string = `Hello World ${name}`;
  ```
- 对象
- 数组
  - 普通数组
   ```typescript
    let arr:number[] = [1,2,3,4];
   ```
  - 泛型数组
   ```typescript
    let arr:Array<number> = [1,2,3,4];
   ```
- 元组
  - 知道长度、类型的数组
   ```typescript
    let x:[string,number] = ['liyang',1];
   ```
- 枚举
   ```typescript
    enum Color{Red=1,Green=2,Blue=3}
    let c:Color = Color.Red;
   ```
- Any
  - 不确定值类型
- Void
  - 没有类型，函数返回值
   ```typescript
   function voidTest():void{
       console.log('void test');
   }
   ```
- Null/undefined
  - 所有类型的子类型
   ```typescript
    enum Color{Red=1,Green=2,Blue=3}
    let c:Color = null;
   ```
