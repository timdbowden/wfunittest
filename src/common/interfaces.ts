import { ProjectStates } from './constants';

export interface IJsonResponse {
  status: number;
  body: any;
}

export interface IProject {
    id: number;
    title: string;
    description: string;
    datePosted: Date;
    budget: number;
    showBudget: boolean;
    currency: number;
    targetDate: Date;
    tags: string[];
    numberOfViews: number;
    numberOfBids: number;
    companyId: number;
    state: ProjectStates;
}

export interface IStage {
    id: number;
    name: string;
    description: string;
    dueDate: Date;
    projectId: number;
}

export interface IAttachment {
    id: number;
    title: string;
    fileName: string;
    size: number;
    data: Blob;
    stageId: number;
}

export interface ICompany {
  id: number;
  name: string;
  description: string;
  url: string;
}

export interface IConsortium {
  id: number;
  projectId: number;
  contactId: number;
}

export interface IOffer {
  id: number;
}

export interface IService {
  id: number;
  companyId: number;
  servicesOffered: number;
  areasCovered: number;
  tags: string[];
}

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  companyId: number;
}