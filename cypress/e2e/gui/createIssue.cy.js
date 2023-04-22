
import { faker } from '@faker-js/faker'
const options = { env: { snapshotOnly: true } }


describe('Create Issue', options,() => {
    const issue = {
        title: `issue-${faker.datatype.uuid()}`,
        description: faker.random.words(3),
        project : {
            name: `project-${faker.datatype.uuid()}`,
            description: faker.random.words(3)
        }
      }
    
    beforeEach(() => {
      cy.api_deleteProjects()
      cy.login()
      cy.api_createProject(issue.project)
      // cy.gui_createProject(issue.project)
    })
  
    it('successfully', () => {
     cy.gui_createIssue(issue)
    //  cy
    })
  })