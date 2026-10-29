import { describe, expect, test } from '@jest/globals';
// import yargs from 'yargs';


const runCommand = async( args: string[] ) => {
    process.argv = [ ...process.argv, ...args ]
 }


describe('Test args.plugin.ts', () => {

    test('should return defaul values', () => {
        
        console.log(process.argv);
        // console.log(yarg);

    });

});