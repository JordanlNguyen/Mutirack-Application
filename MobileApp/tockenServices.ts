class Tocken {
    tocken : string;

    constructor(tocken: string) {
        this.tocken = tocken;
    }

    setTocken (tocken: string) {
        this.tocken = tocken;
    }

    getTocken () : string {
        return this.tocken;
    }
}

const tocken = new Tocken("");

export default tocken;