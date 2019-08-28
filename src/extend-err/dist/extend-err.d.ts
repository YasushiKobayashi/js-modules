interface ExtendErrInterface extends Error {
    errorStack?: Error;
}
declare abstract class ExtendErr extends Error implements ExtendErrInterface {
    errorStack?: Error;
    constructor(message?: string | Error, error?: Error);
}

export default ExtendErr;
