
export class Request {
    public PageContext: PageContext;
    public UserContext: UserContext;
    public Params: Array<Param>;
    public Add(param: Param): void {
        this.PageContext.PageNumber = 1; //reset page number;
        this.Params.push(param);
    }
    public NextPage(): void {
        this.PageContext.NextPage();
    }
}

// export class ParamCollection {
//     public Params: Array<Param>;
//     public Add(param: Param): void {
//         this.Params.push(param);
//     }
// }

export class Param {
    constructor(key: string, value: any) {
        this.Key = key;
        this.Value = value;
    }
    public Key: string;
    public Value: any;
}

export class PageContext {
    private _pageSize: number;
    get PageSize(): number {
        return this._pageSize;
    }
    // get StartIndex(): number {
    //     return ((this._pageNumber - 1) * this._pageSize) + 1;
    // }

    // get EndIndex(): number {
    //     return this.StartIndex + this.PageSize;
    // }
    private _pageNumber: number = 1;
    get PageNumber(): number {
        this._pageNumber = this._pageNumber > 0 ? this._pageNumber : 1;
        return this._pageNumber;
    }
    set PageNumber(value: number) {
        this._pageNumber = value;
    }

    private _totalRecords: number = 0;
    get TotalRecords(): number {
        return this._totalRecords;
    }
    set TotalRecords(value: number) {
        this._totalRecords = value;
    }

    public NextPage(): number {
        this.PageNumber++;
        return this._pageNumber;
    }
}

export class UserContext {
    public UserId: string;
}
