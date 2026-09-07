import { CollapsibleList } from '@/components/collapsible-list';

import { COMPANY_PROJECTS, PERSONAL_PROJECTS } from '@/lib/config/projects';
import {
  Panel,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from '@/components/ui/panel';
import { ProjectItem } from './project-item';

export function Projects() {
  return (
    <>
      <Panel id='personal-projects' className='space-y-4'>
        <PanelHeader>
          <PanelTitle>
            Personal Projects
            <PanelTitleSup>({PERSONAL_PROJECTS.length})</PanelTitleSup>
          </PanelTitle>
        </PanelHeader>

        <CollapsibleList
          items={PERSONAL_PROJECTS}
          max={10}
          renderItem={(item, isFirst, isLast) => (
            <ProjectItem project={item} isFirst={isFirst} isLast={isLast} />
          )}
        />
      </Panel>

      <Panel id='company-projects' className='space-y-4'>
        <PanelHeader>
          <PanelTitle>
            Company Projects
            <PanelTitleSup>({COMPANY_PROJECTS.length})</PanelTitleSup>
          </PanelTitle>
        </PanelHeader>

        <CollapsibleList
          items={COMPANY_PROJECTS}
          max={10}
          renderItem={(item, isFirst, isLast) => (
            <ProjectItem project={item} isFirst={isFirst} isLast={isLast} />
          )}
        />
      </Panel>
    </>
  );
}
