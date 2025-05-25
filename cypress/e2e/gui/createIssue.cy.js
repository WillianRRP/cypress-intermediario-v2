import {faker } from '@faker-js/faker';
import { title } from 'process';

describe('Create Isuue', () => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project:{
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(5)
        }
    }

    beforeEach(() => {
        cy.login();
        cy.gui_createProject(issue.project);
    })

    it('sucessfully', () => {
      cy.gui_createIssue(issue);

      cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
    })
})