import { APPROVAL_STATUSES, AUTHORING_STATE } from 'client/definitions/scenario';
import { IAuthoringScenarioStep } from 'client/interfaces/pages/authoring';

export const getApprovalStatusMessage = (state: string) => {
  if (state === AUTHORING_STATE.DRAFT) return APPROVAL_STATUSES.DRAFT;
  if (state === AUTHORING_STATE.APPROVED) return APPROVAL_STATUSES.APPROVED;
  if (state === AUTHORING_STATE.REJECTED) return APPROVAL_STATUSES.REJECTED;
  return APPROVAL_STATUSES.PENDING;
};

export const getStepsWithFileNameAsync = async (scenarioSteps: IAuthoringScenarioStep[]) => {
  scenarioSteps = scenarioSteps.filter(
    step => !['png', 'jpeg', 'jpg'].includes(step.name.split('.')[1]?.toLowerCase())
  );
  let steps = await scenarioSteps.map(({ order, ...keepAttrs }: any) => {
    return { ...keepAttrs, name: `${keepAttrs.name}.md` };
  });
  return steps;
};

export const getStepsWithFileName = (scenarioSteps: IAuthoringScenarioStep[]) => {
  scenarioSteps = scenarioSteps.filter(
    step => !['png', 'jpeg', 'jpg'].includes(step.name.split('.')[1]?.toLowerCase())
  );
  let steps = scenarioSteps.map(({ order, ...keepAttrs }: any) => {
    return { ...keepAttrs, name: `${keepAttrs.name}.md` };
  });
  return steps;
};
