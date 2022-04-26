// @errors: 2540

interface SomeType {


    readonly prop: string;


}


function doSomething(obj: SomeType) {


    // Chúng ta có thể đọc giá trị từ thuộc tính 'obj.prop'.


    console.log(`prop has the value '${obj.prop}'.`);


    // Nhưng chúng ta không thể gán lại giá trị.


    // obj.prop = "hello";
}