import { BaseTransformer } from 'src/transformer.base';

export class TodoTransformer extends BaseTransformer {
    static singleTransform(element) {
        return {
            id: element.id,
            title: element.title,
            description: element.description ?? "",
            timestamp: element.timestamp
        };
    }
}

// export class BaseTransformer {
//     transform(data: any[]) {
//         return data.map(element => this.singleTransform(element));
//     }

//     singleTransform(element: any) {
//         return { id: element.id, name: element.name };
//     }
// }

// export class TodoTransformer extends BaseTransformer {
//     singleTransform(element: any) {
//         return {
//             id: element.id,
//             name: element.name,
//             description: element.description ?? "",
//             timestamp: element.timestamp
//         };
//     }
// }