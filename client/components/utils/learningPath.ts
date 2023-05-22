import { ILearningPath, IScenario } from 'client/interfaces';

export const getLearningPathType = async (learningPaths: ILearningPath[], learningPathTitle: string) => {
  let learningPathsArrays = learningPaths;
  let foundLearningPath = await learningPathsArrays.find(
    (learningPath: ILearningPath) => learningPath.title === learningPathTitle
  );
  return foundLearningPath?.categories;
};

const evaluateTime = (time: string) => {
  let timeNumber: number = Number(time.replace(' ', ',').split(',')[0]);
  let unit: string = String(time.replace(' ', ',').split(',')[1]);
  if (unit === 'seconds') {
    timeNumber *= 1000;
  } else if (unit === 'minutes') {
    timeNumber *= 1000 * 60;
  } else if (unit === 'hours') {
    timeNumber *= 1000 * 60 * 60;
  }
  return timeNumber;
};

export const getLearningPathTotalPoint = (scenarios?: IScenario[]) => {
  let totalPoints = 0;
  if (scenarios && scenarios.length > 0) {
    scenarios?.map((scenario: IScenario) => {
      if (scenario && scenario.isAvailable) {
        totalPoints += scenario.points ? scenario.points : 0;
      }
    });
  }
  return totalPoints;
};

export const getLearningPathTotalTime = (scenarios?: IScenario[]) => {
  let totalTime = 0;
  let scenarioTime = 0;
  if (scenarios && scenarios.length > 0) {
    scenarios?.map((scenario: IScenario) => {
      if (scenario && scenario.isAvailable) {
        scenarioTime = evaluateTime(scenario?.time || '');
        totalTime += scenarioTime / 60000;
      }
    });
  }
  const time = `${totalTime < 60 ? `${totalTime} min` : `${Math.trunc(totalTime / 60)} hr ${totalTime % 60} min`}`;
  return time;
};
