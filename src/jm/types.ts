export interface Job {
    userId?: string;
    params?: any;
    time: Date;
}

export interface Jobs {
    [id: string]: Job;
}
