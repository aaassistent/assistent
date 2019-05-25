import {Job, Jobs} from './types';
import {Bus} from '../bus';

class JobManager {
    private bus;
    private jobs: Jobs;

    constructor(bus: Bus) {
        this.bus = bus;
        this.bus.subcribe()
        setInterval(() => {
            bus.applyMsg('rubjob', jobs['asdasd'].params, jobs['asdasd'].id);
        }, 100);
    }

    getMessage() {}

    addJob(job: Job) {
        const jobId = 'asdasd';
        this.jobs[jobId] = Job;
        return jobId;
    }
}

export default new JobManager(bus);
