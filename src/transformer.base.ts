// export class BaseTransformer {
//     static transform(data) {
//         const array = []
// data.forEach(element => {
//             // array.push(this.singleTransform(element))
//             array.push(this.singleTransform(element));
//         })
// return array
//     }
// static singleTransform(element) {
//     // misalnya contoh
//         return {
//             id: element.id,
//             name: element.name
//         };
//  }
// }

export class BaseTransformer {
    static transform(data: any[]) {
        const array: any[] = [];
        data.forEach(element => {
            array.push(this.singleTransform(element));
        });
        return array;
    }

    static singleTransform(element: any) {
        // misalnya contoh
        return {
            id: element.id,
            title: element.name,
            description: element.description,
            timestamp: element.timestamp
        };
    }
}