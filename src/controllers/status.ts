import {
  fetchRNCSImmatriculationFromAPI,
  fetchRNCSImmatriculationFromSite,
} from '../models/imr';
import { verifySiren } from '../models/siren-and-siret';
import { Request, Response } from 'express';

export const apiImrStatusController = async (req: Request, res: Response) => {
  try {
    const dummySiren = verifySiren('880878145');
    await fetchRNCSImmatriculationFromAPI(dummySiren);
    res.send({ message: 'ok', status: 200 });
  } catch (e: any) {
    res.send({ message: 'ko', status: e.status | 500 });
  }
};
export const siteImrStatusController = async (req: Request, res: Response) => {
  try {
    const dummySiren = verifySiren('880878145');
    await fetchRNCSImmatriculationFromSite(dummySiren);
    res.send({ message: 'ok', status: 200 });
  } catch (e: any) {
    res.send({ message: 'ko', status: e.status | 500 });
  }
};
