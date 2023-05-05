import React from 'react';
import './latestProjects.css'

const LatestProjects = () => {
  return (
    <div className='latestProjectsBlock'>
      <div className='projectsNav'>
        <h2 className='projectsHeader'>Latest projects</h2>
        <div className='projectsMenuBlock'>
          <div className='projectsMenuList'>All</div>
          <div className='projectsMenuList'>Building</div>
          <div className='projectsMenuList'>Interior</div>
          <div className='projectsMenuList'>View all projects</div>
        </div>
      </div>

      <div className='projectsSliderBlock'>
        <div className='rpojectListWrapper'>
          <div className="projectList project1">
            <div className="projectDescribe">
              <div className='projectDescribeHeader'>Villas</div>
              <div className='projectDescribeText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</div>
              <div className='projectDescribeSeeMore'>See project {'>'} </div>
            </div>
          </div>
          <div className="projectList project2">
          <div className="projectDescribe">
              <div className='projectDescribeHeader'>Dubai</div>
              <div className='projectDescribeText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</div>
              <div className='projectDescribeSeeMore'>See project {'>'} </div>
            </div>
          </div>
          <div className="projectList project3">
          <div className="projectDescribe">
              <div className='projectDescribeHeader'>Houses</div>
              <div className='projectDescribeText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</div>
              <div className='projectDescribeSeeMore'>See project {'>'} </div>
            </div>
          </div>
          <div className="projectList project4">
          <div className="projectDescribe">
              <div className='projectDescribeHeader'>Villas</div>
              <div className='projectDescribeText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat molestie integer aliquam consectetur. Faucibus vitae dui massa tellus magna sit.</div>
              <div className='projectDescribeSeeMore'>See project {'>'} </div>
            </div>
          </div>
        </div>
        <div className='switchSliderBlock'>
          <div className="switchSlide"></div>
          <div className="switchSlide"></div>
          <div className="switchSlide"></div>
        </div>
      </div>

      <div className='projectsExpertiseBlock'>
        <div>Our expertises</div>
        <div>"The best appartment in Dubai" we will find your dream</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
    </div>
  )
}

export default LatestProjects