import React from 'react';
import './sidebar.scss';
import logo from '../Home/images/logo.jpeg';
import { Link } from 'react-router-dom';
import { TreeView, TreeItem } from '@material-ui/lab';
import PostAddIcon from '@material-ui/icons/PostAdd';
import AddIcon from '@material-ui/icons/Add';
import ImportExportIcon from '@material-ui/icons/ImportExport';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileLines,
  faUser,
  faPen,
  faBagShopping,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className='con'>
      <div
        className='col-md-2 d-none d-md-block sidebar'
        style={{ marginTop: '84px' }}
      >
        <div className='sidebar-sticky'>
          <ul className='nav flex-column mt-5'>
            <li className='text-center p-1 '>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to='/admin/dashboard'
              >
                <h6> Cakes&Bakes Dashboard </h6>
              </Link>
            </li>
            <li className='mt-4' style={{ marginLeft: '16px' }}>
              <Link style={{ textDecoration: 'none', color: 'white' }}>
                <TreeView
                  defaultCollapseIcon={
                    <FontAwesomeIcon
                      icon={faBagShopping}
                      className='fa-reagular fa-lg'
                    />
                  }
                  defaultExpandIcon={<ImportExportIcon />}
                >
                  <TreeItem nodeId='1' label='Products'>
                    <Link
                      to='/admin/products'
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      <TreeItem nodeId='2' label='All' icon={<PostAddIcon />} />
                    </Link>

                    <Link
                      to='/admin/product'
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      <TreeItem nodeId='3' label='Create' icon={<AddIcon />} />
                    </Link>
                  </TreeItem>
                </TreeView>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link ' to='/admin/orders'>
                <FontAwesomeIcon
                  icon={faFileLines}
                  style={{ marginRight: '15px' }}
                  className='fa-reagular fa-lg'
                />
                Orders
              </Link>
            </li>

            <li className='nav-item'>
              <Link className='nav-link' to='/admin/users'>
                <FontAwesomeIcon
                  icon={faUser}
                  style={{ marginRight: '15px' }}
                  className='fa-reagular fa-lg'
                />
                Customers
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/admin/reviews'>
                <FontAwesomeIcon
                  icon={faPen}
                  className='fa-reagular fa-lg'
                  style={{ marginRight: '15px' }}
                />
                Review
              </Link>
            </li>
            <li>
              <img
                src={logo}
                alt=''
                style={{
                  width: '150px',
                  borderRadius: '100px',
                  margin: '20px',
                  opacity: '0.5',
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
