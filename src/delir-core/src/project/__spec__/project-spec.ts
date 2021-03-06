import Project from '../project'
import Asset from '../asset'
import Composition from '../composition'
import Layer from '../layer'
import Clip from '../clip'

describe('project structure specs', () => {
    describe('Project', () => {
        let project: Project

        beforeEach(() => {
            project = new Project()
        })

        afterEach(() => {
            project = null
        })

        it('project construction flow', () => {
            project.assets.push(new Asset())
            project.assets.push(new Asset())

            const comp1 = new Composition()
            project.compositions.push(comp1)

            const lane1 = new Layer()
            comp1.layers.push(lane1)

            lane1.clips.push(new Clip())
        })

        it('correctry serialize/deserialize the project', () => {
            const comp1 = new Composition()
            project.compositions.push(comp1)

            const lane1 = new Layer()
            comp1.layers.push(lane1)

            const pbson = project.serialize()
            expect(Project.deserialize(pbson).toJSON()).to.eql(project.toJSON())
        })
    })
})
